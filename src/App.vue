<template>
    <div class="page">
        <div class="page__header">
            <div class="container">
                <header-logo />
            </div>
        </div>

        <div class="page__body">
            <div class="container">
                <main
                    class="main"
                    tabindex="0"
                >
                    <div
                        class="main__scroll"
                    >
                        <dummy-form />
                        <dummy-content-long />
                    </div>
                </main>
            </div>
        </div>

        <div class="page__footer">
            <div class="container">
                <footer>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto doloremque ex expedita
                    illum minus nam non omnis praesentium unde, velit!
                </footer>
            </div>
        </div>
    </div>
</template>

<script>


import useTouchClick from "./compositions/useTouchClick"
import DummyContentLong from "./components/DummyContentLong"
import HeaderLogo from "./components/header/HeaderLogo"
import DummyForm from "./components/DummyForm"
import useSizeUpdater from "./compositions/useSizeUpdater"
export default {
    components: {
        DummyForm,
        HeaderLogo,
        DummyContentLong,
    },
    setup() {
        useTouchClick()

        useSizeUpdater()

    },
}
</script>

<style>

</style>
