// function Log(target: any, key: string, desc: PropertyDescriptor) {
//   const originalMethod = desc.value;
//   desc.value = function (...args: unknown[]) {
//     console.log(`The ${key}  has been called.`);
//     return originalMethod.apply(this, args);
//   };
// }

function Admin(target: any, key: string, desc: PropertyDescriptor) {
  const originalMethod = desc.value;
  desc.value = function (...args: unknown[]) {
    if (args[0].user.role !== "admin") {
      console.log(`Not allowed to ${key}!!!`);
      return;
    }
    return originalMethod.apply(this, args);
  };
}

class ProductController {
  // @Log
  @Admin
  create(req) {
    //console.log("Product has been called");
    // DB call
    console.log("Product has been created.");
  }

  // @Log
  @Admin
  update(req) {
    //console.log("Update method called!");
    // Db call
    console.log("Product has been updated.");
  }
}

const product = new ProductController();
const req = {
  user: {
    role: "guest",
  },
};

const req1 = {
  user: {
    role: "admin",
  },
};
product.create(req);
product.update(req1);
