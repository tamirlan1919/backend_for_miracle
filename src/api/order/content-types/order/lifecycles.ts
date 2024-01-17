module.exports = {
  lifecycles: {
  async   afterCreate(event) {
      await strapi.plugins["email"].services.email.send({
        to: "tchinchaev@bk.ru",
        from: "noreply@my-store.io",
        subject: "Новый заказ",
        text: "Проверьте заказы",
      });
    },
  },
};