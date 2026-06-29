const New_Nas_hero = new Proxy({"src":"/_astro/New_Nas_hero.DTs2c2V0.JPG","width":2040,"height":1148,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nas/Documents/Tech Work/selling_with_nas/src/assets/images/New_Nas_hero.JPG";
							}
							
							return target[name];
						}
					});

export { New_Nas_hero as default };
