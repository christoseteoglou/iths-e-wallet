<template>
  <section>
    <form class="card-form" @submit.prevent="clicker">
      <label for="number" class="col-2">Card Number<span>!</span></label>
      <input
        type="text"
        name="number"
        maxlength="16"
        placeholder="xxxx xxxx xxxx xxxx"
        class="col-2"
        v-model="card.number"
        required
      />
      <label for="cardholder" class="col-2"
        >Cardholder Name<span>!</span></label
      >
      <input
        type="text"
        name="cardolder"
        placeholder="Firstname Lastname"
        class="col-2"
        v-model="card.holder"
        required
      />

      <label for="month" class="col-1">Month<span>!</span></label>
      <label for="year" class="col-1">Year<span>!</span></label>
      <select required name="month" class="col-1" v-model="card.validMonth">
        <option value="" selected disabled hidden></option>
        <option value="01">1</option>
        <option value="02">2</option>
        <option value="03">3</option>
        <option value="04">4</option>
        <option value="05">5</option>
        <option value="06">6</option>
        <option value="07">7</option>
        <option value="08">8</option>
        <option value="09">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>

      <select required name="month" class="col-1" v-model="card.validYear">
        <option value="2021">21</option>
        <option value="2022">22</option>
        <option value="2023">23</option>
        <option value="2024">24</option>
        <option value="2025">25</option>
      </select>

      <label for="vendor" class="col-2">Vendor</label>
      <select name="vendor" class="col-2" v-model="card.vendor">
        <option value="bitcoin">Bitcoin Inc</option>
        <option value="blockchain">Blockchain Inc</option>
        <option value="evil">Evil Corp</option>
        <option value="ninja">Ninja Bank</option>
      </select>
      <button class="col-2">Add card</button>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    card: Object,
  },
  methods: {
    clicker() {
      this.$emit("clicker");
      this.$router.push("/");
    },
    selectVendor() {
      this.$root.cards.vendor = this.card.vendor;
    },
  },
};
</script>

<style scoped>
span {
  color: red;
}

.card-form {
  margin: 2rem 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 1rem;
}

section {
  display: block;
}

.card-form label {
  padding: 0.25rem 0;
  font-size: 0.7rem;
  text-transform: uppercase;
}

label {
  cursor: default;
}

.card-form input,
select {
  border: 1px solid #000;
  border-radius: 0.25rem;
  padding: 0.5rem;
  height: 2.6rem;
  margin: 0 0 0.8rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 1rem;
  width: 100%;
}

input {
  text-rendering: auto;
  color: -internal-light-dark(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: auto;
  background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 2px;
  border-width: 2px;
  border-style: inset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
}

.col-1 {
  grid-column: auto/span 1;
  padding: 1px 2px;
}

.col-2 {
  grid-column: auto/span 2;
  padding: 1px 2px;
}

select:not(:-internal-list-box) {
  overflow: visible !important;
}

option {
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
}

button {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  color: rgb(0, 0, 0);
  box-sizing: border-box;
  text-decoration: none;
  border-width: 0.125rem;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  border-image: initial;
  border-radius: 0.5rem;
  margin: 2rem 0px;
  height: 4rem;
}

button:hover {
  background: black;
  color: #fff;
}

.cta {
  background-color: black;
  color: white;
}
</style>