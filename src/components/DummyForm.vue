<template>
    <form @submit.prevent>
        <label>Form Label Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda blanditiis culpa, cupiditate dicta dolores ex fugit harum inventore iure maiores minus odio placeat quos ratione sequi sit tempore veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur, delectus dolore eius enim eos error esse facilis impedit inventore magni, molestias nam nesciunt nihil non nostrum quaerat quas quo similique, suscipit! XXXX</label>
        <label>Form Label</label>
        <template
            v-for="disabled in [false, true]"
            :key="disabled"
        >
            <div>
                <input
                    v-for="type in types"
                    :key="type"
                    :type="type"
                    :placeholder="type"
                    :disabled="disabled"
                >
            </div>
            <div style="display: flex; flex-direction: row; flex-flow: wrap; align-items: center; gap: 1rem; ">
                <input
                    :disabled="disabled"
                    type="text"
                    placeholder="ref field"
                >
                <button
                    :disabled="disabled"
                >
                    Button
                </button>
                <input
                    :disabled="disabled"
                    type="button"
                    value="Input Button"
                >
                <input
                    :disabled="disabled"
                    type="submit"
                    value="Input Submit"
                >
                <input
                    :disabled="disabled"
                    type="reset"
                    value="Input Reset"
                >
            </div>
        </template>
        <fieldset>
            <legend>Label of Fieldset</legend>
            <label for="f1">Label 1</label>
            <input
                id="f1"
                type="text"
                placeholder="Placeholder"
            >
        </fieldset>
        <div>
            <input type="checkbox">
            <input
                type="checkbox"
                checked
            >
            <input
                ref="indeterminateCheckboxRef"
                type="checkbox"
            >
            <hr>
            <input
                ref="indeterminateRadioRef"
                name="r1"
                type="radio"
                value="v1"
            >
            <input
                name="r1"
                type="radio"
                value="v2"
                checked
            >
            <input
                name="r1"
                type="radio"
                value="v3"
            >
        </div>
        <div>
            <input
                disabled
                type="checkbox"
            >
            <input
                disabled
                type="checkbox"
                checked
            >
            <input
                disabled
                type="radio"
            >
            <input
                disabled
                type="radio"
                checked
            >
        </div>
        <div>
            <textarea placeholder="Enter Text" />
        </div>
        <div>
            <select>
                <option value="">
                    Please select
                </option>
                <optgroup label="My OptGroup 1">
                    <option>Option 1</option>
                    <option disabled>
                        Option 2 disabled
                    </option>
                </optgroup>
                <optgroup label="My OptGroup 2">
                    <option selected>
                        Option 2.2
                    </option>
                </optgroup>
            </select>
            <select multiple>
                <option value="">
                    Please select
                </option>
                <optgroup label="My OptGroup 1">
                    <option>Option 1</option>
                    <option disabled>
                        Option 2 disabled
                    </option>
                </optgroup>
                <optgroup label="My OptGroup 2">
                    <option selected>
                        Option 2.2
                    </option>
                </optgroup>
            </select>
        </div>
        <div>
            <select disabled>
                <option value="">
                    Please select
                </option>
                <optgroup label="My OptGroup 1">
                    <option>Option 1</option>
                    <option disabled>
                        Option 2 disabled
                    </option>
                </optgroup>
                <optgroup label="My OptGroup 2">
                    <option selected>
                        Option 2.2
                    </option>
                </optgroup>
            </select>
            <select
                disabled
                multiple
            >
                <option value="">
                    Please select
                </option>
                <optgroup label="My OptGroup 1">
                    <option>Option 1</option>
                    <option disabled>
                        Option 2 disabled
                    </option>
                </optgroup>
                <optgroup label="My OptGroup 2">
                    <option selected>
                        Option 2.2
                    </option>
                </optgroup>
            </select>
        </div>
    </form>
</template>

<script>
import { onMounted, ref } from "vue"

export default {
    name: "DummyForm",
    setup() {
        /**
         * @type {ToRef<HTMLInputElement>}
         */
        const indeterminateCheckboxRef = ref(null)

        /**
         * @type {ToRef<HTMLInputElement>}
         */
        const indeterminateRadioRef = ref(null)

        const types = [
            "text",
            "email",
            "url",
            "search",
            "date",
            "datetime-local",
            "month",
            "search",
            "tel",
            "time",
            "week",
            "file",
        ]

        onMounted(() => {
            indeterminateCheckboxRef.value.indeterminate  = true
            indeterminateRadioRef.value.indeterminate  = true
        })

        return {
            indeterminateCheckboxRef,
            indeterminateRadioRef,
            types,
        }
    },
}
</script>

<style scoped>

</style>
