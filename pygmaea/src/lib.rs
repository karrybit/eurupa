use wasm_bindgen::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn lexize(text: String) -> String {
    use pygmaea::lexer::Lexer;
    let mut lexer = Lexer::new(text);
    let token = lexer.next_token();
    format!("{}", token)
}
