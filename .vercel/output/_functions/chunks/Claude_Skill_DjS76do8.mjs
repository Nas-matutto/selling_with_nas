const Claude_Skill = new Proxy({"src":"/_astro/Claude_Skill.lPd4kYK3.jpg","width":1200,"height":630,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nas/Documents/Tech Work/selling_with_nas/src/assets/images/Claude_Skill.jpg";
							}
							
							return target[name];
						}
					});

export { Claude_Skill as default };
