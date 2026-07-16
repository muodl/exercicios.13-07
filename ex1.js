let alunos =[

{ nome: "Ana", notas: [8, 9, 0]},
{ nome: "murilo", notas: [10, 10, 10]},
{ nome: "Avril", notas: [1, 1, 1]}

];

function buscarAluno(nome){
for(let i = 0; i < alunos.length; i++){
if(alunos[i].nome.toLowerCase() === nome.toLowerCase()){
return alunos[i]
}
}
}
console.log(buscarAluno("Murilo"))