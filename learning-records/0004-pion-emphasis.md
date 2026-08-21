# 미션 구체화: 회사에서 pion을 많이 쓴다 — Pion·WebRTC 아크 신설

사용자가 "pion을 많이 쓰는데 다음 챕터로 pion 심층 분석이 있으면 좋겠다, WebRTC 지식과 함께"라고 요청했다(2026-08-20). 미션의 미디어 서버 생태계 중에서도 **pion이 실무 최우선**임이 확인됐다 — 커리큘럼의 무게중심을 pion/WebRTC 쪽에 둔다.

**Implications**
- Pion·WebRTC 아크(0015~0020) 신설: 프로토콜 지식(시그널링→ICE→DTLS·DataChannel→RTP·Track→SFU→실코드)과 pion v4 코드 실습을 레슨마다 짝지음
- WebRTC 도메인 지식은 사용자가 스트리밍 업무 경험으로 일부 알 가능성 있음 — 완주 후 보고에서 "이미 알던 부분"을 확인해 다음 캘리브레이션에 반영
- 이후 심화 후보: pion interceptor 직접 작성, simulcast, 대역폭 추정(congestion control), livekit 코드 기여
