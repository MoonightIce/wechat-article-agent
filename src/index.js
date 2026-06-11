import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { scoreTopic } from "./topic-score.js";
import { articleDraftTemplate, reviewChecklist } from "./templates.js";

const root = process.cwd();
const dataDirs = [
  "data/topics",
  "data/sources",
  "data/drafts",
  "data/publishing"
];

const sampleTopic = {
  id: "sample-topic",
  title: "为什么公众号 Agent 应该先本地化开发",
  source: "Linear project: 公众号文章发布 Agent",
  audience: "正在搭建个人内容生产系统的开发者",
  coreClaim: "先把内容流程跑顺，再把稳定环节云端化。",
  status: "ready_to_write",
  scores: {
    audienceFit: 5,
    informationGain: 4,
    motivation: 5,
    sourceDepth: 3,
    timeliness: 3,
    conversionValue: 4,
    risk: 1
  },
  sources: ["sample-source"],
  updatedAt: new Date().toISOString()
};

async function ensureProject() {
  await Promise.all(dataDirs.map((dir) => mkdir(path.join(root, dir), { recursive: true })));
  await writeJsonIfMissing("data/topics/sample-topic.json", sampleTopic);
  await writeJsonIfMissing("data/sources/sample-source.json", {
    id: "sample-source",
    type: "project-note",
    title: "Local-first MVP decision",
    url: "",
    excerpt: "Content workflow should be verified locally before recurring automation moves to the cloud.",
    verificationStatus: "checked",
    copyrightRisk: "low",
    updatedAt: new Date().toISOString()
  });
  await writeJsonIfMissing("data/publishing/.keep.json", {
    note: "Publishing records will be stored here."
  });
}

async function writeJsonIfMissing(relativePath, value) {
  const fullPath = path.join(root, relativePath);
  if (existsSync(fullPath)) return;
  await writeFile(fullPath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

async function readJson(relativePath) {
  const content = await readFile(path.join(root, relativePath), "utf8");
  return JSON.parse(content);
}

function getArgValue(name, fallback) {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

async function run() {
  const command = process.argv[2] ?? "check";

  if (command === "init") {
    await ensureProject();
    console.log("Initialized local article agent workspace.");
    return;
  }

  if (command === "score") {
    await ensureProject();
    const topic = await readJson("data/topics/sample-topic.json");
    console.log(JSON.stringify(scoreTopic(topic), null, 2));
    return;
  }

  if (command === "draft") {
    await ensureProject();
    const topicId = getArgValue("topic", "sample-topic");
    const topic = await readJson(`data/topics/${topicId}.json`);
    const draft = articleDraftTemplate(topic);
    const outputPath = `data/drafts/${topic.id}.md`;
    await writeFile(path.join(root, outputPath), draft, "utf8");
    console.log(`Draft scaffold written to ${outputPath}`);
    return;
  }

  if (command === "check") {
    await ensureProject();
    console.log("Project check passed.");
    console.log(`Review checklist items: ${reviewChecklist.length}`);
    return;
  }

  throw new Error(`Unknown command: ${command}`);
}

run().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
