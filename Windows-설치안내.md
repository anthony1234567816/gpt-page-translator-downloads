# GPT Page Translator — Windows 설치 안내 (1.2.3)

Windows 10/11 x64, Google Chrome 또는 Comet, ChatGPT Plus 또는 Pro 요금제 및 GPT-6 Luna 접근 권한이 필요합니다. 무료 계정은 지원하지 않습니다. Node.js는 포함되어 있어 별도 설치하지 않습니다. OpenAI 공식 제품이 아닙니다.

## 1. Windows EXE 설치·브라우저 연결
1. 공식 다운로드 페이지에서 `GPT-Page-Translator-Windows-x64-Setup-1.2.3.exe`를 받습니다. 아래 보안 안내와 SHA-256을 확인합니다.
2. EXE를 실행하고 준비 진행률이 끝날 때까지 기다립니다. Node.js와 확장 프로그램 폴더가 함께 설치됩니다. 관리자 권한은 요구하지 않습니다.
3. 사용할 **Google Chrome 또는 Comet**을 선택하고 **‘브라우저 연결’**을 한 번 누릅니다. 고정 확장 ID가 자동 등록되므로 복사하거나 입력할 필요가 없습니다. 두 브라우저를 쓴다면 각각 선택해 연결합니다.
4. 다음 단계에서 브라우저에 확장 프로그램을 추가합니다. EXE 설치만으로 브라우저에 확장이 자동 추가되지는 않습니다.

## 2. 브라우저 확장 설치·ChatGPT 로그인
### 현재: 웹스토어 출시 전 개발자 모드
1. Google Chrome 또는 Comet 주소창에 `chrome://extensions`를 입력합니다.
2. **개발자 모드**를 켜고 **‘압축해제된 확장 프로그램을 로드합니다’**(Load unpacked)를 누릅니다.
3. 폴더 선택 창의 주소창에 `%LOCALAPPDATA%\GPT Page Translator\App\extension`을 입력하고 Enter를 누른 뒤 **폴더 선택**을 누릅니다. 주소 입력이 어렵다면 Win+R에서 `%LOCALAPPDATA%\GPT Page Translator`를 열고 `App` → `extension`으로 이동해 위치를 확인하세요.
4. 선택 대상은 파일 하나가 아니라 **`manifest.json`이 바로 들어 있는 `extension` 폴더**입니다. `App` 폴더나 `windows` 폴더를 선택하지 마세요. EXE에 포함되어 있으므로 별도 확장 ZIP 다운로드는 필요 없습니다. 이 폴더는 확장이 사용하는 동안 보관합니다.
5. 확장 ID가 `nfgonbjadjmfjcickpocfhgefhbcdegk`인지 확인합니다. 예전 개발용 확장이 있다면 중복 번역되지 않도록 비활성화합니다.
6. 브라우저를 완전히 종료했다가 다시 열고, 확장 팝업의 **‘ChatGPT 계정 연결’**에서 본인 Plus 또는 Pro 계정으로 공식 로그인·플랜 사용 승인을 완료합니다. 로그인 화면은 Windows 기본 브라우저에서 열릴 수 있습니다.
7. 영어·일본어 일반 웹페이지에서 **‘한국어로 번역’**을 누릅니다. 계정 사용량 제한이 적용됩니다.

### 선택 사항: 별도 확장 ZIP으로 수동 설치
EXE에 포함된 폴더 대신 다른 위치에 확장을 보관하려는 경우에만 `GPT-Page-Translator-Extension-1.2.3.zip`을 다운로드하고 압축을 풉니다. 위 개발자 모드 화면에서 `manifest.json`이 들어 있는 압축 해제 폴더를 선택하세요. 보조 프로그램 EXE 설치·브라우저 연결은 별도로 필요합니다. 두 방법의 확장을 중복 설치할 필요는 없습니다.

### 웹스토어 출시 후
EXE 설치·브라우저 연결은 동일합니다. 확장은 공식 웹스토어 링크의 **‘Chrome에 추가’**로 설치합니다. Comet에서도 Chrome 웹스토어 확장을 설치할 수 있습니다. 개발자 모드나 폴더 선택은 필요 없습니다. 같은 고정 ID를 사용하므로 보조 프로그램의 자동 연결 방식을 그대로 유지합니다. 현재 웹스토어 항목은 아직 게시되지 않았습니다.

## 3. 설치 폴더 열기·연결 도구 다시 실행
보조 프로그램 설치 후 폴더가 생성됩니다. 정확한 경로는 **`%LOCALAPPDATA%\GPT Page Translator`**입니다. `GPT Translator`가 아닙니다. 기존 인증 경로를 유지하기 위해 이름을 바꾸지 않았습니다.

1. **Win + R**을 누릅니다.
2. `%LOCALAPPDATA%\GPT Page Translator`를 입력하고 Enter를 누릅니다.
3. `App` → `windows` 폴더로 들어가 **`Install.cmd`**를 실행합니다.
4. Google Chrome 또는 Comet을 선택하고 **‘브라우저 연결’**을 한 번 누릅니다. ID 입력은 필요 없습니다.

파일 탐색기 주소창에도 같은 경로를 붙여넣을 수 있습니다. 연결 도구의 전체 경로: `%LOCALAPPDATA%\GPT Page Translator\App\windows\Install.cmd`.
`Install.cmd`는 같은 폴더의 `install.ps1`을 실행합니다. `native-host.exe`는 브라우저가 내부에서 실행하는 통신 호스트이므로 직접 더블클릭하는 연결 프로그램이 아닙니다. `Check.cmd`는 로컬 자격 증명·통신 사전 점검용이며 번역 API를 호출하지 않습니다.

## 4. 출처·서명·Windows 보안
현재 EXE는 **코드 서명되지 않았습니다**. SmartScreen에서 알 수 없는 게시자 또는 평판 경고가 나올 수 있습니다. 경고만으로 안전/악성을 판정할 수 없습니다. 공식 GitHub 배포처와 버전·SHA-256을 비교하고 Microsoft Defender로 검사하세요. 회사·학교 정책으로 차단되면 관리자에게 문의하세요. 보안 기능을 끄거나 탐지된 파일을 강제로 실행하지 마세요.

- 공식 다운로드: https://anthony1234567816.github.io/gpt-page-translator-downloads/
- 배포 파일 해시: 같은 배포 묶음의 `SHA256SUMS-1.2.3.txt` (파일별 정확한 해시)
- 선택적 해시 확인: PowerShell `Get-FileHash -Algorithm SHA256 "다운로드한 파일 경로"`.
- Defender: 파일 우클릭 → Windows 11에서는 필요 시 ‘더 많은 옵션 표시’ → ‘Microsoft Defender로 검사’. 메뉴가 없으면 Windows 보안 → 바이러스 및 위협 방지 → 검사 옵션 → 사용자 지정 검사로 다운로드 폴더를 검사합니다. 탐지 결과가 있으면 설치를 멈추고 지원에 알립니다.
- 정상 설치에는 관리자 권한 상승이나 보안 설정 영구 변경이 필요하지 않습니다. 설치 프로세스에만 PowerShell 실행 정책 옵션을 적용합니다.

## 5. 업데이트·제거·데이터
업데이트 전에 번역을 중단하고 Chrome/Comet을 종료한 뒤 새 EXE를 실행합니다. 기존 앱 파일은 교체하지만 `chatgpt` 인증 폴더와 브라우저의 확장 설정은 지우지 않습니다. 기존 Native Messaging 등록 및 저장한 브라우저 값도 보존하며, 선택 후 연결 버튼으로 해당 브라우저 등록을 갱신합니다. 웹스토어 확장과 보조 프로그램은 별도로 업데이트합니다. EXE의 App\extension 폴더를 로드한 경우 새 EXE 설치 후 확장 관리 화면에서 새로고침합니다. 별도 ZIP 폴더를 로드한 경우에는 해당 폴더도 새 확장 ZIP으로 교체하고 새로고침합니다.

제거는 `%LOCALAPPDATA%\GPT Page Translator\App\windows\Uninstall.cmd`를 실행합니다. 브라우저 확장은 별도로 제거합니다. 제거 도구는 재설치를 위해 로그인 폴더를 남깁니다. 완전 삭제하려면 먼저 확장에서 계정 연결을 해제하고 브라우저/호스트 종료 후 `%LOCALAPPDATA%\GPT Page Translator` 폴더를 삭제합니다. 브라우저 설정 삭제는 확장 제거로 처리합니다. 원문 복원은 인증·캐시·로그 삭제가 아닙니다.

성능 로그: `%LOCALAPPDATA%\GPT Page Translator\App\host\performance-log.jsonl`.
연결 실패 진단: `%LOCALAPPDATA%\GPT Page Translator\connection-check-result.txt`.
자동 만료는 없습니다. 브라우저/호스트 종료 후 해당 파일을 수동 삭제할 수 있습니다.

## 6. 연결 실패
연결 도구를 다시 실행하고 브라우저 선택·‘브라우저 연결’ 후 브라우저를 재시작합니다. 잘못된 폴더나 예전 확장을 로드하지 않았는지 확인하세요. 로그인 취소/플랜 권한/사용량 제한은 설치 오류와 별개입니다. 무료 계정은 지원하지 않습니다. 제한 회복 후 사용자가 다시 실행해야 합니다.

문의: anthony1234567816@gmail.com. OS·브라우저·버전·오류 코드만 보내세요. 비밀번호, 토큰, 개인 웹페이지 본문은 보내지 마세요.
