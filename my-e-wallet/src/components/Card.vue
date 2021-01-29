.<template>
  <article class="card" :class="card.vendor">
    <header>
      <img
        v-if="card.vendor === 'bitcoin'"
        src="../assets/chip-dark.svg"
        alt="credit card chip"
      />
      <img v-else src="../assets/chip-light.svg" alt="credit card chip" />

      <img
        v-if="card.vendor === 'bitcoin'"
        src="../assets/vendor-bitcoin.svg"
      />
      <img
        v-else-if="card.vendor === 'blockchain'"
        src="../assets/vendor-blockchain.svg"
      />
      <img v-else-if="card.vendor === 'evil'" src="../assets/vendor-evil.svg" />
      <img
        v-else-if="card.vendor === 'ninja'"
        src="../assets/vendor-ninja.svg"
      />
    </header>
    <section class="number" v-if="card.number">{{ cardNumber }}</section>
    <section class="number" v-else></section>
    <section class="info">
      <aside class="holder">
        <span>Cardholder Name</span>
        <p>{{ card.holder }}</p>
      </aside>
      <aside class="valid">
        <span>Valid until</span>
        <p>{{ card.validMonth }}/{{ card.validYear }}</p>
      </aside>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    card: Object,
  },
  computed: {
    cardHolder() {
      return this.card.holder;
    },
    cardNumber() {
      return this.card.number.match(/.{1,4}/g).join(" ");
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 24rem;
  height: 14rem;
  border-radius: 0.6rem;
  background: #eee;
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: 0 0 0.5rem rgb(0 0 0 / 40%);
  display: grid;
  gap: 0.5rem 0;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 2.8rem;
  text-shadow: -1px -1px 2px hsl(0deg 0% 100% / 40%);
}

.card header {
  display: flex;
  grid-column: auto/span 2;
  grid-row: auto/span 2;
  justify-content: space-between;
  align-items: flex-start;
}

.card header {
  align-self: flex-end;
  opacity: 1;
}

.card header img {
  opacity: 0.8;
}

.card section.info,
.card section.number {
  grid-column: auto/span 2;
  grid-row: auto/span 1;
  display: flex;
}

.card section.number {
  font-size: 1.6rem;
  letter-spacing: 0.05rem;
  padding: 0.5rem 0 0;
  text-transform: uppercase;
}

.card section.info,
.card section.number {
  grid-column: auto/span 2;
  grid-row: auto/span 1;
  display: flex;
}

.card section.info aside.holder {
  flex: 1;
}

aside {
  display: block;
}

.card section aside span {
  display: block;
  text-transform: uppercase;
  font-size: 0.7rem;
  margin: 0 0 0.25rem;
}

.card section aside p {
  display: block;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.card section.info aside.holder {
  flex: 1;
}

aside {
  display: block;
}

.card section aside.valid span {
  text-align: right;
}

.card section aside span {
  display: block;
  text-transform: uppercase;
  font-size: 0.7rem;
  margin: 0 0 0.25rem;
}

.card section aside.valid p {
  text-align: center;
}
.evil {
  background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16), transparent),
    #f33355;
  color: #fff;
}

.blockchain {
  background: linear-gradient(
      248.52deg,
      rgba(0, 0, 0, 0.15),
      1.49%,
      transparent
    ),
    #8b58f9;
  color: #fff;
}

.bitcoin {
  background: linear-gradient(
      0.689turn,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0) 99.07%
    ),
    #ffae34;
  color: #222;
}

.ninja {
  background: linear-gradient(
      248.3deg,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0)
    ),
    #222;
  color: #fff;
}

.blank {
  background: linear-gradient(
      237.75deg,
      hsla(0, 0%, 100%, 0.24),
      hsla(0, 0%, 100%, 0)
    ),
    #d0d0d0;
}
</style>