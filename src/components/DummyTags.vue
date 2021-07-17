<template>
    <div>
        <template
            v-for="idx in 6"
            :key="idx"
        >
            <component :is="`h${idx}`">
                Header H{{ idx }}
            </component>
        </template>

        <div>Ordered LIST:</div>
        <ol>
            <li
                v-for="idx in 6"
                :key="idx"
            >
                List item {{ idx }}
            </li>
        </ol>
        <div>Unordered LIST:</div>
        <ul>
            <li
                v-for="idx in 6"
                :key="idx"
            >
                List item {{ idx }}
            </li>
        </ul>
        <div>Horizontal rule</div>
        <hr>
        <div>3 Paragraphs</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur dolore dolorem ea eum
            illum magni modi mollitia nemo repellat, tempore.
        </p>
        <p>
            Ad animi excepturi labore obcaecati reiciendis? Deserunt dignissimos dolores eligendi ex neque nesciunt non,
            nostrum, perferendis provident, qui quo tempora velit.
        </p>
        <p>
            Aliquam assumenda atque iusto nisi, optio quo quos recusandae. Animi corporis esse iste maxime pariatur
            perspiciatis quis, quos ullam vel veritatis.
        </p>
        <div>Inline Tags with mixed Styles</div>
        pre,
        code,
        kbd,
        samp

        <p>
            Lorem ipsum dolor <strong>strong</strong> sit amet, <b>bold</b> consectetur adipisicing elit. A adipisci amet aperiam asperiores beatae commodi
            cum <i>Italic</i> dolorem, ducimus ea <em>em tag</em> error eum fugit hic illo incidunt molestias nemo neque placeat, possimus quia quod,
            sapiente sequi sit tempore voluptas voluptates? <a href="#">Link: Aliquid aspernatur</a> assumenda autem beatae corporis cum
            cupiditate debitis delectus, et facilis, inventore itaque iusto laborum natus nobis, perspiciatis
            voluptatibus? Accusamus,
            dolorum ducimus enim excepturi explicabo facere incidunt labore maxime minima nihil nulla officia quas quis
            <sub>sub</sub> quos <sup>sup</sup> recusandae <code>reiciendis rerum soluta</code> tempora veritatis voluptatum? Asperiores aut culpa dolor, doloribus
            eius eligendi enim eum excepturi <small>small</small> explicabo maxime minus, molestiae officia pariatur quisquam repellendus?
        </p>
        <div>ABR-Tag: <abbr title="Toilettentiefseetaucher">TTT</abbr></div>
        <div>KBD-Tag: Press <kbd>Ctrl</kbd>+<kbd>S</kbd> to save.</div>
        <table>
            <caption>My Table Caption</caption>
            <thead>
                <tr>
                    <th
                        v-for="idx in 6"
                        :key="idx"
                    >
                        Col Title {{ idx }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="idx in 3"
                    :key="idx"
                >
                    <td
                        v-for="idy in 6"
                        :key="idy"
                    >
                        Cell {{ idx }} / {{ idy }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "DummyTags",
}
</script>

<style scoped>

</style>
