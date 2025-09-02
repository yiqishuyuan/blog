#!/usr/bin/env node
import fs from "fs-extra";
import path from "path";
import semver from "semver";
import { execSync } from "child_process";

const packagePath = path.resolve(__dirname, "../package.json");
const pkg = fs.readJsonSync(packagePath);

// 获取命令行参数
const releaseType = (process.argv[2] || "patch");
if (!["major", "minor", "patch"].includes(releaseType)) {
  console.error("❌ 参数错误，请使用: major | minor | patch");
  process.exit(1);
}

// 计算新版本号
const newVersion = semver.inc(pkg.version, releaseType);
pkg.version = newVersion;

// 写回 package.json
fs.writeJsonSync(packagePath, pkg, { spaces: 2 });
console.log(`✅ 版本已更新: ${pkg.version}`);

// Git 提交和打 tag
try {
  execSync("git add package.json", { stdio: "inherit" });
  execSync(`git commit -m "chore: bump version to ${pkg.version}"`, {
    stdio: "inherit",
  });
  execSync(`git tag v${pkg.version}`, { stdio: "inherit" });
  console.log(`🏷️ 已生成 Git tag: v${pkg.version}`);
} catch (error) {
  console.error("⚠️ Git 操作失败，请确认是否在 Git 仓库中运行。");
  console.error("error info:", error);
}
