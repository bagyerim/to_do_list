# to_do_list
##코드 리뷰
reviewer: 금재님

###1.구현되지 않은 부분

-할 일을 작성한 뒤 ✔️를 클릭하면 실행이 되지않음.
-위와 같은 이유로 따라서 남은 일과 끝낸 일을 볼 수가 없음
-할 일을 클릭하면 업데이트가 되지않음.
=>필요한 과정:
1.할 일 클릭 시 수정 가능한 입력 창을 생성.
2.수정 창에서 새로운 할 일을 입력하고, 엔터 또는 버튼을 클릭하면 새로운 내용으로 할 일을 업데이트.
3.수정 창에서 esc 키를 누르거나 수정 창 바깥을 클릭하면 수정을 취소.
(코드에 addTodo 함수에서 생성된 li 요소에 수정 기능을 추가하기 위해 버튼이 아닌 div 요소에 이벤트를 추가해야 함.li의 구조를 변경해야함.)

###2.아쉬운 부분

-공백인 상태에서 엔터를 치면 입력을 할 수 없다는 등의 메시지를 넣는 디테일이 부족.
=>addTodo 함수의 첫 번째 줄에 입력된 값이 공백인지를 검사하는 코드를 추가.예를 들어, todo 변수에 할일을 저장할 때, trim() 함수를 사용하여 입력된 문자열에서 앞뒤 공백을 제거함. 그 다음, 만약 할일이 공백이면 alert() 함수를 사용하여 "입력할 수 없습니다."라는 메시지를 알림창으로 띄우고, return 키워드를 사용하여 함수를 종료함. 그렇지 않은 경우, 이전과 같이 새로운 할일을 추가

###3.개선하면 좋을 점

- todoList.innerHTML = ""와 같이 innerHTML 속성을 이용해 직접 HTML 코드를 수정하는 방식은 좋지 않음. 이 방식은 모든 하위 노드들을 다시 생성하고 렌더링하기 때문에, 성능 저하를 유발. 대신, todoList 요소의 자식 노드들을 하나씩 삭제하는 방식(while (todoList.firstChild) todoList.removeChild(todoList.firstChild);)으로 구현하면 성능상 이점이 있음.

###4.공통적으로 몰랐던 부분

-closest,toggle,contains 내가 사용하여 코드를 작성했으나 끝마치고 나면 이것들이 어떠한 역할을 했는지 이해하고 복습하는 것이 필요해 보임.

-설명
closest: 주어진 요소의 가장 가까운 상위 요소를 반환함. 상위 요소 중에서 지정한 셀렉터와 일치하는 요소를 찾음.

toggle: 주어진 클래스를 요소에서 추가하거나 제거함. 만약 해당 클래스가 이미 존재한다면 클래스를 제거하고, 존재하지 않는다면 클래스를 추가함.

contains: 주어진 요소가 다른 요소의 자식 요소인지 여부를 반환함.

(1,2 좀 더 공부해서 깃헙 버전 업데이트 해놓겠습니다...)
