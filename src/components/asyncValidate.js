const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function asyncValidate(values) {
  await sleep(1500);
});
