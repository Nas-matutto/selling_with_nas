const Cowork_image = new Proxy({"src":"/_astro/Cowork_image.qA8UZyEp.jpg","width":1200,"height":630,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nas/Documents/Tech Work/selling_with_nas/src/assets/images/Cowork_image.jpg";
							}
							
							return target[name];
						}
					});

export { Cowork_image as default };
