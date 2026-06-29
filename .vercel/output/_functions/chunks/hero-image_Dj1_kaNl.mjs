const heroImage = new Proxy({"src":"/_astro/hero-image.DGXbIQJN.png","width":1024,"height":576,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nas/Documents/Tech Work/selling_with_nas/src/assets/images/hero-image.png";
							}
							
							return target[name];
						}
					});

export { heroImage as default };
