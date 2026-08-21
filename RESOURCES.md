# Go Resources

## Knowledge

- [A Tour of Go](https://go.dev/tour/) — Go 팀이 만든 공식 인터랙티브 튜토리얼. Use for: 문법·기본 개념의 첫 습득. 브라우저에서 바로 실행 가능.
- [How to Write Go Code](https://go.dev/doc/code) — 모듈·패키지·디렉토리 구조의 공식 가이드. Use for: 프로젝트를 어떻게 배치하고 빌드하는지.
- [Effective Go](https://go.dev/doc/effective_go) — Go의 철학과 관용구(idiom)를 담은 가장 중요한 문서. Use for: "Go답게" 쓰는 법 — 포맷팅, 인터페이스, 에러, 동시성 관례.
- [Go by Example](https://gobyexample.com/) — 개념마다 최소 동작 예제 하나. Use for: Tour 이후 빠른 문법 레퍼런스.
- [The Go Programming Language Specification](https://go.dev/ref/spec) — 언어 명세. Use for: 문법 논쟁의 최종 심판. 초반에는 참조용으로만.
- [Go FAQ](https://go.dev/doc/faq) — 언어 설계 결정의 이유들. Use for: "왜 Go는 이렇게 만들었지?"라는 질문.
- [The Go Blog](https://go.dev/blog/) — 언어 제작자들이 직접 쓰는 심층 아티클. Use for: slices 내부 구조, 에러 처리, 제네릭 같은 주제 심화.
- [pkg.go.dev](https://pkg.go.dev/) — 표준 라이브러리·서드파티 패키지 문서. Use for: API 시그니처와 예제 확인.
- [Go Playground](https://go.dev/play/) — 브라우저 실행 환경. Use for: 설치 없이 코드 조각 실험·공유.

### WebRTC (Pion·WebRTC 아크 원전)

- [WebRTC for the Curious](https://webrtcforthecurious.com/) — WebRTC 구현자들(Pion 진영)이 쓴 오픈소스 책, 13개 챕터. Use for: 시그널링/ICE/보안/RTP 등 프로토콜 지식의 1차 원전. 아크 0015~0020의 챕터별 원전.
- [pion/webrtc v4 API 문서](https://pkg.go.dev/github.com/pion/webrtc/v4) — Use for: PeerConnection/Track/DataChannel API 시그니처 확인.
- [pion/webrtc examples](https://github.com/pion/webrtc) — 리포 내 examples/ 디렉토리. Use for: play-from-disk, broadcast 등 공식 예제 코드 리딩.

### 미션 도메인 (미디어 서버 코드베이스 — 학습의 목적지)

- [pion/webrtc](https://github.com/pion/webrtc) — 순수 Go WebRTC 구현. Use for: 중급 이후 실전 코드 읽기 대상. [awesome-pion](https://github.com/pion/awesome-pion)에 활용 사례 목록.
- [bluenviron/mediamtx](https://github.com/bluenviron/mediamtx) — SRT/WebRTC/RTSP/RTMP/LL-HLS 미디어 서버·프록시. Use for: 실무와 가장 가까운 코드베이스 구조 학습.
- [livekit/livekit](https://github.com/livekit/livekit) — Go로 작성된 분산 WebRTC SFU. Use for: 대규모 Go 서비스의 동시성·아키텍처 사례.

## Wisdom (Communities)

- [Go Wiki: Asking Questions](https://go.dev/wiki/Questions) — 공식 질문 채널 안내 허브. 여기서 시작.
- [Gophers Slack](https://invite.slack.golangbridge.org/) — #beginners-help 채널이 활발하고 Go 팀 멤버도 답변. Use for: 막힌 문제 실시간 질문.
- [r/golang](https://reddit.com/r/golang) — 뉴스·토론 중심의 대형 커뮤니티. Use for: 생태계 동향, 설계 토론 구경.
- [Stack Overflow (go 태그)](https://stackoverflow.com/questions/tagged/go) — Use for: 구체적이고 재현 가능한 코드 질문.

## Gaps

- 검증된 책 리소스 없음 — 기초 완료 후 심화용 서적(예: 종이책 선호 여부) 조사 필요
- 동시성 심화(고루틴 스케줄러, 메모리 모델) 전용 리소스는 해당 단계 도달 시 조사
- 한국어 Go 커뮤니티 미조사 — 사용자가 원하면 추가 조사
