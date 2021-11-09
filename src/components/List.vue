<template>
  <main>
    <ul>
      <li v-for="(item, index) in diary" :key="index">
        <p>{{ item.title }}</p>
        <p>{{ item.description }}</p>
        <p>{{ item.createtime }}</p>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      diary: [{
        title: 'Design Logo',
        description: 'Make logo for the mini project',
        createtime: '2021-11-09 15:31',
      }, {
        title: '즐거웠습니다',
        description: '선택하지 않는다면, 알 수 없는 운명대로 흘러지만, 선택을 한다면 결과가 어떻든 선택대로 바뀐다',
        createtime: '2021-11-09 15:31',
      }, {
        title: '삶도 다 모르는데 죽음에 대해 생각해 볼 시간이 어디 있어요?',
        description: '남이 나를 알아주지 못한다고 억울해 할거 없다. 나도 남을 알아주지 못할까 걱정이다.',
        createtime: '2021-11-09 15:31',
      }, {
        title: '윤영 공부해라',
        description: 'ㅡㅡ 똑바로해라',
        createtime: '2021-11-09 15:31',
      }, {
        title: '멀을수록 작아보이고, 가까울수록 커보인다.',
        description: '죽음이란건 탈출은 될수 있어도 탈출구는 될 수 없어.',
        createtime: '2021-11-09 15:31',
      }, {
        title: '삶과 죽음의 경계선, 그 곳엔 누가 있을까?',
        description: '가는 길에 심심한데 네 이야기나 한번 듣지',
        createtime: '2021-11-09 15:31',
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
main { padding: 25px; }

ul {
  li {
    color: #fff;
    margin-block: 16px;

    &:nth-child(odd) { background-color: $primary; }
    &:nth-child(even) { background-color: $secondary; }
  }
}
</style>
