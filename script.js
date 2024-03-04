
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
// console.log(btn);
// console.log(Number(calculareTotal.innerHTML));
// console.log(num);
var items =[];

const calculateTotal = ()=>{
   let total = 0
   let boxvalue = document.querySelector('.input1 input').value;
   items.push(+boxvalue)
   for (let i = 0; i < items.length; i++) {
      // console.log(items[i]);
      total+=items[i]
      console.log(total);
      calculareTotal.textContent = total
   }
}


btn.addEventListener('click', ()=>{
   // calculareTotal.textContent += items.map(i => i)
   
   calculateTotal()

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