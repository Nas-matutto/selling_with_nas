const ClaudeMarketing = new Proxy({"src":"/_astro/Claude-Marketing.DolSVfIO.jpg","width":1200,"height":630,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nas/Documents/Tech Work/selling_with_nas/src/assets/images/Claude-Marketing.jpg";
							}
							
							return target[name];
						}
					});

export { ClaudeMarketing as default };
