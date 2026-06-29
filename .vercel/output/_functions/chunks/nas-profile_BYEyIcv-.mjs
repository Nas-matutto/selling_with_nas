const nasProfile = new Proxy({"src":"/_astro/nas-profile.BS89Vzb-.jpg","width":4284,"height":5712,"format":"jpg","orientation":6}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nas/Documents/Tech Work/selling_with_nas/src/assets/images/nas-profile.jpg";
							}
							
							return target[name];
						}
					});

export { nasProfile as default };
