function Log(target: any, key: string, desc: PropertyDescriptor) {
  const originalMethod = desc.value;
  desc.value = function (...args: unknown[]) {
    console.log(`The method  has been called.`);
    return originalMethod.apply(this, args);
  };
}

class ProductController {
  @Log
  create() {
    //console.log("Product has been called");
    // DB call
    console.log("Product has been created.");
  }

  @Log
  update() {
    //console.log("Update method called!");
    // Db call
    console.log("Product has been updated.");
  }
}

const product = new ProductController();
product.create();
