const COUNT = 'COUNT';

const Subscription = {
  count: {
    subscribe: (parent, args, { pubsub }, info) => {
      let count = 0;
      setInterval(() => {
        count++;
        pubsub.publish(COUNT, {
          count
        });
      }, 1000);
      return pubsub.asyncIterator([COUNT]);
    }
  }
};

module.exports = Subscription;
