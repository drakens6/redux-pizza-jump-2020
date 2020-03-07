import React from 'react';

function PizzaBase() {
    return (
        <form>
            <label>How much sauce? </label><br/>
            <input type="radio" id="little" name="sauce" value="little"/>
            <label>A little sauce</label><br/>
            <input type="radio" id="normal" name="sauce" value="normal" checked/>
            <label>Normal amount of sauce</label><br/>
            <input type="radio" id="big" name="sauce" value="lot"/>
            <label>A lot of sauce</label><br/>
            <br/>
            <label>Type of dough? </label><br/>
            <input type="radio" id="classic" name="dough" value="classic" checked/>
            <label>Classic</label><br/>
            <input type="radio" id="normal" name="dough" value="normal"/>
            <label>Normal amount of sauce</label><br/>
            <input type="radio" id="big" name="dough" value="lot"/>
            <label>A lot of sauce</label>


        </form>
    )
}

export default PizzaBase;