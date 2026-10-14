# Windows 보조 프로그램 1.3.0 설치 안내
Chrome 웹스토어 확장과 Windows 보조 프로그램 **1.3.0**는 별도로 설치합니다.
Windows 10/11 x64, Chrome 또는 Comet, 적격 ChatGPT Plus/Pro가 필요합니다. Node.js는 포함됩니다.
배포 파일: [Windows 보조 프로그램 v1.3.0](https://github.com/anthony1234567816/gpt-page-translator-downloads/releases/tag/v1.3.0).
1. 사용할 Chrome 또는 Comet에서 [Chrome 웹스토어 확장](https://chromewebstore.google.com/detail/nfgonbjadjmfjcickpocfhgefhbcdegk)을 설치합니다. 개발자 모드를 켤 필요가 없습니다.
2. 보조 프로그램 EXE를 실행합니다. 설치 상태에 따라 설치·재설치·업데이트·복구·제거가 표시됩니다. 설치된 버전이 더 최신이면 다운그레이드를 차단합니다.
3. 원하는 설치 작업을 선택합니다. Chrome·Comet을 종료하고 Google Chrome 또는 Comet을 선택해 **브라우저 연결**을 누릅니다. 브라우저는 강제로 종료하지 않으며 보조 프로그램의 실행 프로세스만 정리합니다.
4. 브라우저를 다시 열고 확장 팝업에서 ChatGPT 계정을 연결합니다. 기존 로그인은 가능한 한 유지됩니다. 브라우저 연결과 실제 번역은 확장에서 확인하세요.
**ID를 복사하거나 입력할 필요가 없습니다.** 웹스토어 버튼은 공식 페이지를 열기만 하며 확장 설치 완료 여부를 확인하지 않습니다.
EXE는 코드 서명되지 않았습니다. 정품 출처와 SHA-256을 확인하세요. 사용자 보고로 신규 설치·기존 설치·이전 버전 업데이트의 정상 동작을 확인했습니다.
## 재연결
Win + R → `%LOCALAPPDATA%\GPT Page Translator` → `App\windows\Install.cmd`.
전체 경로는 `%LOCALAPPDATA%\GPT Page Translator\App\windows\Install.cmd`입니다.
Google Chrome → Comet 순서로 표시됩니다. 선택 후 브라우저 연결을 누릅니다.
설치된 연결 도구는 프로그램을 덮어쓰지 않습니다. 재설치·업데이트·복구는 다운로드한 EXE로 진행하세요.
## 기존 개발자 모드 사용자
업데이트 시 기존 `%LOCALAPPDATA%\GPT Page Translator\App\extension` 폴더는 같은 경로에 보존합니다.
신규 EXE·ZIP에는 확장 파일을 동봉하지 않으며 신규 설치에서 이 폴더를 만들지 않습니다.
기존 확장의 번역 속도·자동 사이트 등 설정을 기록한 뒤 웹스토어 버전으로 전환하세요.
같은 ID의 개발자 확장은 스토어 설치와 충돌할 수 있습니다. 브라우저에서 기존 개발자 확장을 제거해야 할 경우 로컬 설정이 초기화될 수 있으므로 먼저 기록하세요.
이전 개발 ID 확장과 스토어 확장을 동시에 켜지 마세요. 스토어 확장 하나로 번역을 확인한 뒤 기존 파일을 정리할 수 있습니다. 설치 프로그램은 전환 여부를 추정해 폴더를 삭제하지 않습니다.
## 제거
EXE의 제거 또는 `App\windows\Uninstall.cmd`를 사용합니다.
기본 제거는 보조 프로그램·소유한 Native Messaging 등록을 제거하며 ChatGPT 인증 폴더와 기존 개발자 확장 파일을 보존합니다.
완전 삭제 체크는 기본 해제되어 있습니다. 선택·재확인하면 인증·계정·호스트 식별 정보, 설치 파일과 기존 확장 파일, 알려진 진단 로그를 삭제합니다. 재로그인이 필요합니다.
웹스토어 확장과 브라우저 설정은 별도로 남습니다. 원격 ChatGPT 승인 해제도 보장하지 않습니다. 필요하면 제거 전에 확장에서 연결을 해제하고 ChatGPT 설정에서 승인 상태를 확인하세요.
## 문제 해결
브라우저를 종료하고 EXE를 다시 실행해 복구를 선택하세요. 인증 폴더를 직접 지우지 마세요.
로그: `%LOCALAPPDATA%\GPT Page Translator\installer-log.jsonl`.
연결 점검: `App\windows\Check.cmd`. 기존 진단 파일은 `connection-check-result.txt`입니다.
`rollback_incomplete`이면 이전 파일과 복구 저널을 보존합니다. 임의로 삭제하지 말고 브라우저를 종료한 뒤 EXE 복구를 다시 시도하세요.
알 수 없는 다른 설치의 등록이나 링크·접합점이 발견되면 안전을 위해 중단합니다.

## v1.3.0 안내

Windows 보조 프로그램 v1.3.0을 제공합니다. 확장 v1.3.0 웹스토어 업데이트는 예정입니다. 현재 웹스토어 설치본과 기본 연결·번역은 호환되며, v1.3 자동 복구 기능에는 v1.3 확장이 함께 필요합니다.
