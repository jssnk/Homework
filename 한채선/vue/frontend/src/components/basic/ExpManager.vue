<template>
<div>
  <fieldset>
    <legend><h3>경험치 교환소 (lv99~ Open) </h3></legend>
    <p>누적된 경험치를 추가 스테이터스 수치로 교환 가능합니다.</p>
    <p>1회당 소모 경험치: 100000000 <button v-on:click="exchangingStatus()" v-if="characterStatus.level >= 10">교환</button> </p>
    <table border="1" v-if="characterStatus.level >= 10">
      <tr>
        <th align="center" width="40">번호</th>
        <th align="center" width="120">스테이터스</th>
        <th align="center" width="40">교환</th>
      </tr>
      <tr v-for="(exchangingStatus, idx) in exchangeStatusList" :key="idx">
        <th align="center" width="40">{{ idx + 1 }}</th>
        <th align="center" width="120">{{ exchangingStatus.status}}</th>
        <th align="center" width="40">
          <label>
            <input type="checkbox" v-model="exchangeStatusValue" :value="idx">
          </label>
        </th>
      </tr>
    </table>
  </fieldset>
</div>
</template>

<script>
export default {
  name: "ExpManager",
  data() {
    return {
      exchangeStatusValue: [],

      exchangeStatusList: [
        { status: 'HP', plus: 50 },
        { status: 'MP', plus: 50 },
        { status: 'ATK', plus: 5 },
        { status: 'DEF', plus: 5 },
        { status: 'STR', plus: 5 },
        { status: 'INT', plus: 5 },
        { status: 'DEX', plus: 5 },
        { status: 'VIT', plus: 5 },
        { status: 'MEN', plus: 5 },
      ],
    }
  },
  methods: {
    exchangingStatus(){
      let tmpExp = 0;

      for (let i = 0; i < this.exchangeStatusValue.length; i++) {
        for (let j = 0; j < this.exchangeStatusList.length; j++) {
          if(this.exchangeStatusValue[i] == j){
            tmpExp += 10000
            // 테스트를 위해 필요한 경험치 수치를 조정하였음
            break
          }
        }
      }

      if (this.characterStatus.currentLevelBar - tmpExp >= 0) {
        this.characterStatus.currentLevelBar -= tmpExp
        for (let i = 0; i < this.exchangeStatusValue.length; i++) {
          this.addExchangedStatus(this.exchangeStatusList[this.exchangeStatusValue[i]].status)
        }
      }
    },

    addExchangedStatus(statusName) {
      switch (statusName) {
        case 'HP':
          this.characterStatus.addedStatus.hp += 50
          break
        case 'MP':
          this.characterStatus.addedStatus.mp += 50
          break
        case 'ATK':
          this.characterStatus.addedStatus.atk += 5
          break
        case 'DEF':
          this.characterStatus.addedStatus.def += 5
          break
        case 'STR':
          this.characterStatus.addedStatus.str += 5
          break
        case 'INT':
          this.characterStatus.addedStatus.intelligence += 5
          break
        case 'DEX':
          this.characterStatus.addedStatus.dex += 5
          break
        case 'VIT':
          this.characterStatus.addedStatus.vit += 5
          break
        case 'MEN':
          this.characterStatus.addedStatus.men += 5
          break
        default :
          alert('알 수 없는 오류입니다!')
      }
    },

  }
}
</script>

<style scoped>

</style>