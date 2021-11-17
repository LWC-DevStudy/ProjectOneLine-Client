# ProjectOneLine-Client
하루 한 줄 코멘트
## 목차
1. 프로잭트 개요
2. 역할 분담
3. 배운점
4. 아쉬운 점
<hr>

## 프로젝트 개요
하루 한 줄 코멘트<br>
<img width="700" alt="KakaoTalk_Photo_2021-08-19-14-18-15" src="https://user-images.githubusercontent.com/66675699/130013076-4bd6dc0b-0f99-4ad3-8f29-fc31e6db201f.png">

<hr>

## 🕶역할 분담
- 진우 님 : Update, Delete, 좋아요 기능
- 종혁 님 : Create, Read, 로그인 및 회원가입
<hr>

## ✍️ 배운 점
종혁
- 로그인 시 로컬스토리지에 토큰이 서버에서 내려준 토큰이 아닌 token으로 저장되는 것을 확인하였습니다🤦‍♂️<br>
이 문제는 치명적이었습니다😭<br>
글 작성시 token을 서버에 보내야하는데 token이 정상적이지 않아서 글 작성이 제대로 되지 않았습니다😞<br>
하지만 당황하지 않고 천천히 문제의 원인을 파악했고 생각보다 쉽게 해결했습니다!<br>
우선 첫 번째로 브라우저에 Network탭에서 토큰을 내려주는 것을 확인했고 클라이언트의 문제라는 것을 확인했습니다!<br>
그 후 토큰과 리덕스를 확인했고 리덕스에서 문제점을 찾아 문제를 해결했습니다👍<br>
원인과 해결방법은 아래의 코드블럭에 기재했습니다.
코딩을 좀 더 꼼꼼하게 해야겠다는 생각이 들었고<br>
문제를 해결하는 법에 대해 배웠습니다!
~~~javascript
export const logInDB =
  (user_info) =>
  async (dispatch, getState, { history }) => {
    const username = user_info.username;
    const password = user_info.password;
    try {
      const login = await instance.post('/login', {
        username,
        password,
      });
      const login_info = {
        token: login.data.token,
        username: login.data.username,
      };
    ------------------------------
    //dispatch(SetUser(login_info));
    //history.replace('/');
         // window.alert('로그인 완료!');
       // } catch (err) {
         // console.log(err);
       // }
     // };
    ----토큰을 제대로 못받은 이유-------
    setToken을 안해줌
    ------------------------------
    <--------수정 후------------->
      dispatch(SetUser(login_info));
      setToken(login_info.token);
      history.replace('/');
      window.alert('로그인 완료!');
    } catch (err) {
      console.log(err);
    }
  };
~~~

진우
- 좋아요 기능을 구현하는 것이 어려웠었는데 이번 프로젝트를 통해 좋아요 기능 구현에 성공해서 좋았습니다.
## 😭 아쉬웠던 점
---
종혁
- 진우님과 마찬가지로 새로고침 시에 유저 정보가 사라지는 현상을 해결하지 못한 것이 아쉬었습니다...<br>
- 2021.11.17 => 새로고침 시에 유저 정보가 사라지는 현상에 대해 알아 본 결과 원인은 다음과 같습니다..<br>
- logInCheck부분의 API를 설계하지 않아 logInCheck가 역할을 제대로 하지 못하고 있었습니다..😭<br>
- 정말 기본 적인 부분이었음에도 원인을 캐치하지 못한 것이 부끄럽지만 이번 일로 인하여 API 설계가 중요하단 것을 깨달았습니다!

진우
- 새로고침 시에 유저 정보가 사라지는 현상을 해결하지 못한 것이 아쉬웠습니다.

