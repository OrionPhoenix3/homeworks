// Zyabrev Vladislav JS4

//Homework 20

//Задание 1

function PublicService() {
  this.services = [];

  this.tariffs = {
    hotWater: 7,
    coldWater: 1,
    gas: 0.3,
    electricity: 1.6
  };
}

PublicService.prototype.addMeterReadings = function (amount, serviceName) {
    if (!Object.keys(this.tariffs).includes(serviceName)){
      throw new Error(`Service "${serviceName}" is unavailble`);
    }

    if (this.services.some(({key}) => key === serviceName)){
      throw new Error(`Service "${serviceName}" is already included`);
    }

    this.services.push({ key: serviceName, amount});
};

PublicService.prototype.deleteMeterReadings = function (serviceName) {
    this.services = this.services.filter(({ key }) => key !== serviceName);
};

PublicService.prototype.getSum = function () {
  return this.services.reduce((sum, {key, amount}) => {
    sum += this.tariffs[key] * amount;
    return sum;
  }, 0);

// test
  // return this.services.forEach(({key, amount}) => {
  //     console.log(`key`, key);
  //     console.log(`amount`, amount);
  //     console.log(`this.tariffs[key]`, this.tariffs[key]);

  //   let sum;
  //   sum = this.tariffs[key] * amount;
  //   console.log(`sum`, sum);
  //   return sum;
  // })
};

const service = new PublicService();

service.addMeterReadings(100, "hotWater");
service.addMeterReadings(300, "coldWater");
service.addMeterReadings(20, "gas");
service.deleteMeterReadings("hotWater");

const response = service.getSum();
console.log(`response`, response)