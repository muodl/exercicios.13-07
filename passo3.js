const alunos = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Carlos", notas: [5, 4, 6] },
    { nome: "Mariana", notas: [3, 2, 3] },
    { nome: "João", notas: [] }
  ];
  
  // Passo 1
  function buscarAluno(nome) {
    for (let i = 0; i < alunos.length; i++) {
      if (alunos[i].nome.toLowerCase() === nome.toLowerCase()) {
        return alunos[i];
      }
    }
    return undefined;
  }
  
  // Passo 2
  function calcularMedia(aluno) {
    if (!aluno.notas || aluno.notas.length === 0) {
      return 0;
    }
    
    let soma = 0;
    for (let i = 0; i < aluno.notas.length; i++) {
      soma += aluno.notas[i];
    }
    return soma / aluno.notas.length;
  }
  
  // Passo 3
  function situacao(media) {
    if (media >= 6) {
      return "APROVADO";
    } else if (media >= 4) {
      return "RECUPERACAO";
    } else {
      return "REPROVADO";
    }
  }
  
  // Teste rápido no console
  const aluno = buscarAluno("ana");
  const media = calcularMedia(aluno);
  const status = situacao(media);
  
  console.log(aluno);  // Mostra o objeto da Ana
  console.log(media);  // Mostra 8
  console.log(status); // Mostra "APROVADO"