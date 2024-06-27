const notebook = {
  brand: 'ASUS',
  model: 'Vivobook D413IA-EB303TS',
  processor: 'AMD Ryzen 7 4700U 3.6GHz',
  graphics: 'Integrated Graphics : AMD Radeon Graphics',
  ram: '8GB DDR4 Onboard',
  storage: '512GB PCIe NVMe M.2 SSD'
};
let obj1 = {}
for(key in notebook){
  obj1[key] = notebook[key]
}
console.log(obj1)

let obj2 = Object.assign({}, notebook)
console.log(obj2)
