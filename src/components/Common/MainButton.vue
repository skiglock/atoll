<template>
  <component
    :is="type"
    :to="to"
    class="btn"
    :class="{ 'btn--link': type === 'g-link' }"
    :style="cssVars"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    to: {
      type: String,
      default: null
    },
    backgroundcolor: {
      type: String,
      default: '#487bfa'
    },
    color: {
      type: String,
      default: '#fff'
    },
    padding: {
      type: String,
      default: '10px 40px'
    },
    width: {
      type: Number,
      default: 272
    },
    height: {
      type: Number,
      default: 54
    },
    hover: {
      type: String,
      default: '#E76E55'
    },
    fontsize: {
      type: Number,
      default: 20
    },
    fontweight: {
      type: Number,
      default: 600
    },
    borderradius: {
      type: Number,
      default: 60
    }
  },
  computed: {
    type() {
      if (this.to) {
        return 'g-link'
      } else {
        return 'button'
      }
    },
    cssVars() {
      return {
        '--fontweight': `${this.fontweight}`,
        '--fontsize': `${this.fontsize}px`,
        '--color': this.color,
        '--backgroundcolor': this.backgroundcolor,
        '--borderradius': `${this.borderradius}px`,
        // '--width': `${this.width}px`,
        // '--height': `${this.height}px`,
        '--padding': this.padding,
        '--hover': this.hover
      }
    }
  }
}
</script>

<style lang="scss">
.btn {
  display: inline-block;
  border: none;
  cursor: pointer;
  font-weight: var(--fontweight);
  font-size: var(--fontsize);
  background-color: var(--backgroundcolor);
  color: var(--color);
  border-radius: var(--borderradius);
  padding: var(--padding);
  &:hover {
    background-color: #7397f3;
  }
  // max-height: var(--height);
  // max-width: var(--width);
  &--link {
    cursor: pointer;
    text-decoration: none;
    text-align: center;
  }
  @media screen and (max-width: 992px) {
    font-size: 21px;
    padding: 10px 37px;
  }
  @media screen and (max-width: 768px) {
    font-size: 19px;
    padding: 10px 34px;
  }
  @media screen and (max-width: 576px) {
    font-size: 17px;
    padding: 10px 31px;
  }
  @media screen and (max-width: 460px) {
    font-size: 15px;
    padding: 10px 28px;
  }
  @media screen and (max-width: 320px) {
    padding: 11px 25px;
  }
}
</style>
