export function rehypeCollectHeadings(onHeadings: (list: any[]) => void) {
  return (tree: any) => {
    const headings: any[] = [];

    function visit(node: any) {
      if (node.type === "element" && /^h[1-6]$/.test(node.tagName)) {
        const level = Number(node.tagName[1]);
        const textNode = node.children.find((c: any) => c.type === "text");
        const text = textNode ? textNode.value : "";

        headings.push({
          id: node.properties.id,
          text,
          level,
        });
      }

      if (node.children) {
        node.children.forEach(visit);
      }
    }

    visit(tree);

    if (onHeadings) {
      onHeadings(headings); // 🔹 插件执行完立即回调父组件
    }
  };
}
