<template>
  <div id="dd">abc</div>
</template>

<script setup>
import { of, fromEvent } from 'rxjs'
import { repeatWhen } from 'rxjs/operators'

const source = of('Repeat message')
const documentClick$ = fromEvent(document, 'click')

source.pipe(repeatWhen(() => documentClick$)).subscribe(data => console.log(data))
</script>

<style>
#dd {
  background: pink;
}
</style>
