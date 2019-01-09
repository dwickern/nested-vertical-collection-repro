import Controller from '@ember/controller';

function * generate(count, ...rest) {
  for (let i = 0; i < count; ++i) {
    yield {
      name: `item ${i}`,
      children: Array.from(generate(...rest))
    }
  }
}

export default Controller.extend({
  // working:
  // items: Array.from(generate(20))

  // not working:
  items: Array.from(generate(20, 20))
  // items: Array.from(generate(20, 20, 20))
});
