const quizzingsImage = new Proxy({"src":"/_astro/Quizzings_HP.F1CIbe8m.png","width":2256,"height":1272,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nas/Documents/Tech Work/selling_with_nas/src/assets/images/Quizzings_HP.png";
							}
							
							return target[name];
						}
					});

export { quizzingsImage as default };
