const Nas_collage = new Proxy({"src":"/_astro/Nas_collage.CdQNFzmV.png","width":768,"height":768,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nas/Documents/Tech Work/selling_with_nas/src/assets/images/Nas_collage.png";
							}
							
							return target[name];
						}
					});

export { Nas_collage as default };
