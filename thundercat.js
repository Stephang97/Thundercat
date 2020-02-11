
class Thundercat {

  runBehavior;
  atackBehavior;

  setRunBehavior(runBehavior){
      this.runBehavior = runBehavior
  }

  setAtackBehavior(atackBehavior){
      this.atackBehavior = atackBehavior
  }

  
  performRun(){
      this.runBehavior.run()
    }
  
    performAtack(){
      this.atackBehavior.atack()
    }

}

class Leono extends Thundercat{
  display(){
    console.log('Hey yo soy Leono !!!')
  }
}


class Cheetara extends Thundercat{
  display(){
    console.log('Yo soy Cheetara !')
  }
}


class RunningFast{
  run(){
    console.log('waaa voy muy deprisa')
  }
}

class RunningSlow{
  run(){
    console.log('voy trotando')
  }
}

class AtackPunch{
  atack(){
    console.log('Falcon punch !!')
  }
}

class AtackKick{
  atack(){
    console.log('Te reviento con mi patada')
  }
}



