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
      default: '10px 15px'
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
      default: 23
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
        '--width': `${this.width}px`,
        '--height': `${this.height}px`,
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
  height: var(--height);
  width: var(--width);
  &--link {
    cursor: pointer;
    text-decoration: none;
    text-align: center;
  }
}
</style>
