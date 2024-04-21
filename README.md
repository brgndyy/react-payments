# 💳 페이먼츠

페이먼츠 사용자의 카드 정보를 입력하고 해당 카드를 어플리케이션에 등록한다.

### 카드 번호 입력 및 식별

- 사용자가 입력하는 카드 번호를 실시간으로 파악하여, Visa나 MasterCard에 해당하면 해당 브랜드의 로고를 UI에 표시한다.
  - Visa : 4로 시작하는 16자리
  - MasterCard: 51~55로 시작하는 16자리 숫자
- 입력은 숫자만 가능하며, 유효하지 않은 번호 입력 시 피드백을 제공한다.

### 카드 유효기간 입력

- 월과 년도를 범위 내에서만 입력할 수 있어야 하며, 입력 제한을 두어 사용자가 숫자만 입력할 수 있도록 한다.

### 카드 소유자 이름 입력

- 영문자 대문자만 입력 가능한 폼을 구현한다.

### 실시간 프리뷰 업데이트

- 사용자의 카드 정보 입력에 따라 카드 프리뷰를 동시에 업데이트한다.

### ⚠️ 주의 사항

- 사용자의 입력 input에 포커스를 자동으로 이동하는 부분을 1단계에서 고려하지 않는다. **'기능' 자체에 집중해서 구현**한다. 만약 리뷰어가 사용자 경험 측면에서 피드백을 준다면, 피드백을 반영하는 시점에서 사용자 경험도 함께 고려하여 개선한다.
- 기본적인 기능 요구사항을 만족하지 못한 코드는 코드 리뷰 대상이 아니다.
