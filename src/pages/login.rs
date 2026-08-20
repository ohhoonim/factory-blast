use leptos::prelude::*;

#[component]
pub fn Login() -> impl IntoView {
    view! {
        <biz-content-container variant="card" size="small">
            <div slot="header-slot">
                <biz-page-header
                    title="로그인"
                    subtitle="보안 규칙을 준수하세요"
                    variant="standard"
                ></biz-page-header>
            </div>
            <div style="
            padding: 48px 12px;
            display: flex;
            gap: 28px;
            flex-direction: column;
            ">
                <biz-text-input required full-width clearable>
                    <label slot="label-slot" for="input">
                        아이디
                    </label>
                    <span slot="helper-text-slot">이메일 형식으로 입력하세요</span>
                </biz-text-input>

                <biz-password-input clearable="" variant="outlined" size="medium" full-width="">
                    <label slot="label-slot" for="input">
                        비밀번호
                    </label>
                </biz-password-input>
                <div style="display: flex; justify-content: center; gap: 24px">
                    <button>로그인</button>
                    <button>취소</button>
                </div>
            </div>

            <div
                slot="footer-slot"
                style="padding: 16px; border-top: 1px solid #e5e7eb; text-align: center"
            >
                <a href="#">아이디 찾기</a>
                <a href="#">패스워드 변경</a>
            </div>
        </biz-content-container>
    }
}
