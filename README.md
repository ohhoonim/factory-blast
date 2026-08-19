# Factory CSR-UI

## 프로젝트 구성

- factory-anvil 프로젝트에서 생성한 Biz-UI 웹 컴포넌트
- Leptos trunk-starter 를 사용하여 초기 구성

## 개발 

다음의 명령어로 local에서 서버를 실행합니다.

```sh
trunk serve --port 3000 --open
```

브라우저에서 `http://localhost:3000` 에 접속하세요.


## 배포

명령어는 다음과 같습니다. 배포에 대한 자세한 내용은 하단 참고문헌 링크를 이용하세요.

```sh
trunk build --release
```

## start-trunk 

이 프로젝트는 https://github.com/leptos-rs/start-trunk.git 템플릿을 사용하여 초기 생성되었습니다. 자세한 내용은 해당 리파지토리를 참고하세요. hydrate가 가능한 CSR 템플릿은  https://github.com/leptos-rs/start-csr 을 이용하세요.

Rust의 nightly 를 사용하지 않는다면 다음 명령어를 수행하세요.

```sh
rustup toolchain install nightly --allow-downgrade
```

Rust에 `wasm` 컴파일 대상을 추가하세요.

```sh
rustup target add wasm32-unknown-unknown
```

## 참고 문헌

- Leptos: https://github.com/leptos-rs/leptos
- Trunk: https://github.com/trunk-rs/trunk
- Trunk-instructions: https://trunk-rs.github.io/trunk/guide/assets/
- deploy-csr: https://book.leptos.dev/deployment/csr.html