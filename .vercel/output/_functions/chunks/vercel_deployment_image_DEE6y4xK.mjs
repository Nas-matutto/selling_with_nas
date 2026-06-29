const vercel_deployment_image = new Proxy({"src":"/_astro/vercel_deployment_image.l6N87ph0.jpg","width":1200,"height":630,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nas/Documents/Tech Work/selling_with_nas/src/assets/images/vercel_deployment_image.jpg";
							}
							
							return target[name];
						}
					});

export { vercel_deployment_image as default };
