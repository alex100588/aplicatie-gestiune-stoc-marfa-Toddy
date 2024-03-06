
const data = document.querySelector('.data input')
const input1 = document.querySelector('.input1 input');
const input2 = document.querySelector('.input2 input');
const input3 = document.querySelector('.input3 input');
const input4 = document.querySelector('.input4 input');
const input5 = document.querySelector('.input5 input');
const input6 = document.querySelector('.input6 input');
const input7 = document.querySelector('.input7 input');
const input8 = document.querySelector('.input8 input');
const input9 = document.querySelector('.input9 input');
const input10 = document.querySelector('.input10 input');
const input11 = document.querySelector('.input11 input');
const input12 = document.querySelector('.input12 input');
const input13 = document.querySelector('.input13 input');
const input14 = document.querySelector('.input14 input');
const input15 = document.querySelector('.input15 input');
const input16 = document.querySelector('.input16 input');
const input17 = document.querySelector('.input17 input');
const input18 = document.querySelector('.input18 input');
const input19 = document.querySelector('.input19 input');
const input20 = document.querySelector('.input20 input');
const input21 = document.querySelector('.input21 input');
const input22 = document.querySelector('.input22 input');
const input23 = document.querySelector('.input23 input');
const btn = document.querySelector('.btn')
const testRow = document.querySelector('.testRow ')
const calculareTotal = document.querySelector('.calculareTotal')
const calculareTotal2 = document.querySelector('.calculareTotal2')
const calculareTotal3 = document.querySelector('.calculareTotal3')
const calculareTotal4 = document.querySelector('.calculareTotal4')
const calculareTotal5 = document.querySelector('.calculareTotal5')
const calculareTotal6 = document.querySelector('.calculareTotal6')
const calculareTotal7 = document.querySelector('.calculareTotal7')
const calculareTotal8 = document.querySelector('.calculareTotal8')
const calculareTotal9 = document.querySelector('.calculareTotal9')
const calculareTotal10 = document.querySelector('.calculareTotal10')
const calculareTotal11 = document.querySelector('.calculareTotal11')
const calculareTotal12 = document.querySelector('.calculareTotal12')
const calculareTotal13 = document.querySelector('.calculareTotal13')
const calculareTotal14 = document.querySelector('.calculareTotal14')
const calculareTotal15 = document.querySelector('.calculareTotal15')
const calculareTotal16 = document.querySelector('.calculareTotal16')
const calculareTotal17 = document.querySelector('.calculareTotal17')
const calculareTotal18 = document.querySelector('.calculareTotal18')
const calculareTotal19 = document.querySelector('.calculareTotal19')
const calculareTotal20 = document.querySelector('.calculareTotal20')
const calculareTotal21 = document.querySelector('.calculareTotal21')
const calculareTotal22 = document.querySelector('.calculareTotal22')
const calculareTotal23 = document.querySelector('.calculareTotal23')
const calculareTotal24 = document.querySelector('.calculareTotal24')
// console.log(btn);
// console.log(Number(calculareTotal.innerHTML));
// console.log(num);



let items =[]; 
const calculateTotal = ()=>{
   let total = 0
   
   let boxvalue = input1.value
   items.push(+boxvalue)
   for (let i = 0; i < items.length; i++) {
      // console.log(items[i]);
      total+=items[i]
      
      // console.log(total);
      calculareTotal.textContent = total
   }
}

let items2 =[];
const calculateTotal2 = ()=>{
   
   let total = 0
   
   let boxvalue = input2.value
   items2.push(+boxvalue)
   for (let i = 0; i < items2.length; i++) {
      // console.log(items[i]);
      total+=items2[i]
     
      // console.log(total);
      calculareTotal2.textContent = total
   }
}

let items3 =[];
const calculateTotal3 = ()=>{
   
   let total = 0
   
   let boxvalue = input3.value
   items3.push(+boxvalue)
   for (let i = 0; i < items3.length; i++) {
      // console.log(items[i]);
      total+=items3[i]
     
      // console.log(total);
      calculareTotal3.textContent = total
   }
}

let items4 =[];
const calculateTotal4 = ()=>{
   
   let total = 0
   
   let boxvalue = input4.value
   items4.push(+boxvalue)
   for (let i = 0; i < items4.length; i++) {
      // console.log(items[i]);
      total+=items4[i]
     
      // console.log(total);
      calculareTotal4.textContent = total
   }
}
let items5 =[];
const calculateTotal5 = ()=>{
   
   let total = 0
   
   let boxvalue = input5.value
   items5.push(+boxvalue)
   for (let i = 0; i < items5.length; i++) {
      // console.log(items[i]);
      total+=items5[i]
     
      // console.log(total);
      calculareTotal5.textContent = total
   }
}
let items6 =[];
const calculateTotal6 = ()=>{
   
   let total = 0
   
   let boxvalue = input6.value
   items6.push(+boxvalue)
   for (let i = 0; i < items6.length; i++) {
      // console.log(items[i]);
      total+=items6[i]
     
      // console.log(total);
      calculareTotal6.textContent = total
   }
}
let items7 =[];
const calculateTotal7 = ()=>{
   
   let total = 0
   
   let boxvalue = input7.value
   items7.push(+boxvalue)
   for (let i = 0; i < items7.length; i++) {
      // console.log(items[i]);
      total+=items7[i]
     
      // console.log(total);
      calculareTotal7.textContent = total
   }
}
let items8 =[];
const calculateTotal8 = ()=>{
   
   let total = 0
   
   let boxvalue = input8.value
   items8.push(+boxvalue)
   for (let i = 0; i < items8.length; i++) {
      // console.log(items[i]);
      total+=items8[i]
     
      // console.log(total);
      calculareTotal8.textContent = total
   }
}
let items9 =[];
const calculateTotal9 = ()=>{
   
   let total = 0
   
   let boxvalue = input9.value
   items9.push(+boxvalue)
   for (let i = 0; i < items9.length; i++) {
      // console.log(items[i]);
      total+=items9[i]
     
      // console.log(total);
      calculareTotal9.textContent = total
   }
}
let items10 =[];
const calculateTotal10 = ()=>{
   
   let total = 0
   
   let boxvalue = input10.value
   items10.push(+boxvalue)
   for (let i = 0; i < items10.length; i++) {
      // console.log(items[i]);
      total+=items10[i]
     
      // console.log(total);
      calculareTotal10.textContent = total
   }
}


btn.addEventListener('click', ()=>{
   
   calculateTotal()
   calculateTotal2()
   calculateTotal3()
   calculateTotal4()
   calculateTotal5()
   calculateTotal6()
   calculateTotal7()
   calculateTotal8()
   calculateTotal9()
   calculateTotal10()

   const html = `
   <tr class="text-center">
   
   <td>${data.value}-02-24</td> 
   <td>${input1.value}</td>
   <td>${input2.value}</td> 
   <td>${input3.value}</td>
   <td>${input4.value}</td>
   <td>${input5.value}</td>
   <td>${input6.value}</td> 
   <td>${input7.value}</td>
   <td>${input8.value}</td>
   <td>${input9.value}</td>
   <td>${input10.value}</td> 
   <td>${input11.value}</td>
   <td>${input12.value}</td>
   <td>${input13.value}</td>
   <td>${input14.value}</td> 
   <td>${input15.value}</td>
   <td>${input16.value}</td>
   <td>${input17.value}</td>
   <td>${input18.value}</td> 
   <td>${input19.value}</td>
   <td>${input20.value}</td>
   <td>${input21.value}</td>
   <td>${input22.value}</td> 
   <td>${input23.value}</td>
   
   </tr>
   `;

 testRow.insertAdjacentHTML('beforebegin', html);
   
})
