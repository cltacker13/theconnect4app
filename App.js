import { initializeApp } from 'firebase/app';
import { createRoot } from 'react-dom/client'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView, initialWindowMetrics } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Alert, Button } from 'react-native';
import React from 'react';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdjPP6oTh9WMWgD6fNqvUr0YBgns3dIZ8",
  authDomain: "theconnect4app.firebaseapp.com",
  databaseURL: "https://theconnect4app-default-rtdb.firebaseio.com",
  projectId: "theconnect4app",
  storageBucket: "theconnect4app.appspot.com",
  messagingSenderId: "958341876928",
  appId: "1:958341876928:web:5ca6d83834f6fe32e37125"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = createRoot(document.getElementById("root"));
root.render(App());


const Stack = createNativeStackNavigator();
const logoImage = require ('./assets/images/connect4Logo.png');

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={logoImage} style={styles.logoContainer}></Image>
      </View>
      <View>
          <Pressable style={styles.playButton} 
              onPress={() => 
                // alert('Starting Game.')
                  navigation.navigate('Game')
              }>
              <Text style={styles.playButtonLabel}>Play Game</Text>
          </Pressable>
      </View>
      <StatusBar style="auto"></StatusBar>
    </SafeAreaView>
  ); 
}

function ProfileScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{color: '#fff',fontWeight: 'bold'}}>
          Hello {currentUserData.userName}!</Text>
      </View>
      <View>
        <Text style={{color: '#fff',fontWeight: 'bold'}}>
          Account Data</Text>
          <View>
          <Text style={{color: '#fff'}}>
          Email: {currentUserData.userLoginEmail}</Text>
          <Text style={{color: '#fff'}}>
          Total Wins: {currentUserData.userTotalGameWins}</Text>
          </View>
      </View>
      <View>
        <Pressable style={styles.profileButton}
          onPress={() => navigation.push('Home') }
          title="logout">
            <Text style={{color: '#fff',fontWeight: 'bold'}}>Logout</Text>
        </Pressable> 
      </View>
      <StatusBar style="auto"></StatusBar>
    </SafeAreaView>
  ); 
}

function GameScreen({navigation}) {
  const [gameState, setGameState] = React.useState(0);
  const backText = '< Back';
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable style={styles.profileButton}
          onPress={() => navigation.push('Profile') }
          title="userProfile">
            <Text style={{color: '#fff',fontWeight: 'bold'}}>{currentUserData.userName}</Text>
        </Pressable>  
        //<Pressable style={styles.resetButton} 
          //onPress={() => setGameState(initialState.resetGame())} 
          //title="Reset Game">
            //<Text style={{color: '#fff',fontWeight: 'bold'}}>Reset Game</Text>
        //</Pressable>
      ),
      headerLeft: () => (
        <Pressable style={styles.headerBackContainer}
        onPress={() => initialState.resetGame() & navigation.popToTop()}
        title="Back">
          <Text style={styles.headerBackText}>{backText}</Text>
        </Pressable>
      )
    });
  }, [navigation, setGameState ]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: '#fff'}}>  </Text>
      <View style={styles.gameContainer}>
        <View style={styles.gameMessageContainer}>
          <Text style={styles.gameMessageText}>{initialState.displayMessage}</Text>
        </View>
          <View style={styles.colselections}>
            <Pressable style={(initialState.board[5][0] == "0") ? styles.spaceSeletion : styles.fullSpaceSelection}  
              onPress={() => 
                placeToken('1') &
                navigation.push('Game')
              }><Text>1</Text>
            </Pressable>
            <Pressable style={(initialState.board[5][1] == "0") ? styles.spaceSeletion : styles.fullSpaceSelection}  
              onPress={() => 
                placeToken('2') &
                navigation.push('Game')
              }><Text>2</Text>
            </Pressable>
            <Pressable style={(initialState.board[5][2] == "0") ? styles.spaceSeletion : styles.fullSpaceSelection}  
              onPress={() => 
                placeToken('3') &
                navigation.push('Game')
              }><Text>3</Text>
            </Pressable>
            <Pressable style={(initialState.board[5][3] == "0") ? styles.spaceSeletion : styles.fullSpaceSelection}  
              onPress={() => 
                placeToken('4') &
                navigation.push('Game')
              }><Text>4</Text>
            </Pressable>
            <Pressable style={(initialState.board[5][4] == "0") ? styles.spaceSeletion : styles.fullSpaceSelection}  
              onPress={() => 
                placeToken('5') &
                navigation.push('Game')
              }><Text>5</Text>
            </Pressable>
            <Pressable style={(initialState.board[5][5] == "0") ? styles.spaceSeletion : styles.fullSpaceSelection} 
              onPress={() => 
                placeToken('6') &
                navigation.push('Game')
              }><Text>6</Text>
            </Pressable>
          </View>
          <View id='row6' style={styles.boardGrid}>
            <View id='row6-col1' style={initialState.spaceColors[5][0] ? (initialState.p1Spaces[5][0] ? styles.playerOneToken : (initialState.p2Spaces[5][0] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[5][0]}</Text></View>  
            <View id='row6-col2' style={initialState.spaceColors[5][1] ? (initialState.p1Spaces[5][1] ? styles.playerOneToken : (initialState.p2Spaces[5][1] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[5][1]}</Text></View>  
            <View id='row6-col3' style={initialState.spaceColors[5][2] ? (initialState.p1Spaces[5][2] ? styles.playerOneToken : (initialState.p2Spaces[5][2] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[5][2]}</Text></View>  
            <View id='row6-col4' style={initialState.spaceColors[5][3] ? (initialState.p1Spaces[5][3] ? styles.playerOneToken : (initialState.p2Spaces[5][3] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[5][3]}</Text></View>  
            <View id='row6-col5' style={initialState.spaceColors[5][4] ? (initialState.p1Spaces[5][4] ? styles.playerOneToken : (initialState.p2Spaces[5][4] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[5][4]}</Text></View>  
            <View id='row6-col6' style={initialState.spaceColors[5][5] ? (initialState.p1Spaces[5][5] ? styles.playerOneToken : (initialState.p2Spaces[5][5] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[5][5]}</Text></View>  
          </View>
          <View id='row5' style={styles.boardGrid}>
            <View id='row5-col1' style={initialState.spaceColors[4][0] ? (initialState.p1Spaces[4][0] ? styles.playerOneToken : (initialState.p2Spaces[4][0] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[4][0]}</Text></View>  
            <View id='row5-col2' style={initialState.spaceColors[4][1] ? (initialState.p1Spaces[4][1] ? styles.playerOneToken : (initialState.p2Spaces[4][1] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[4][1]}</Text></View>  
            <View id='row5-col3' style={initialState.spaceColors[4][2] ? (initialState.p1Spaces[4][2] ? styles.playerOneToken : (initialState.p2Spaces[4][2] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[4][2]}</Text></View>  
            <View id='row5-col4' style={initialState.spaceColors[4][3] ? (initialState.p1Spaces[4][3] ? styles.playerOneToken : (initialState.p2Spaces[4][3] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[4][3]}</Text></View>  
            <View id='row5-col5' style={initialState.spaceColors[4][4] ? (initialState.p1Spaces[4][4] ? styles.playerOneToken : (initialState.p2Spaces[4][4] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[4][4]}</Text></View>  
            <View id='row5-col6' style={initialState.spaceColors[4][5] ? (initialState.p1Spaces[4][5] ? styles.playerOneToken : (initialState.p2Spaces[4][5] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[4][5]}</Text></View>  
          </View>
          <View id='row4' style={styles.boardGrid}>
            <View id='row4-col1' style={initialState.spaceColors[3][0] ? (initialState.p1Spaces[3][0] ? styles.playerOneToken : (initialState.p2Spaces[3][0] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[3][0]}</Text></View>  
            <View id='row4-col2' style={initialState.spaceColors[3][1] ? (initialState.p1Spaces[3][1] ? styles.playerOneToken : (initialState.p2Spaces[3][1] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[3][1]}</Text></View>  
            <View id='row4-col3' style={initialState.spaceColors[3][2] ? (initialState.p1Spaces[3][2] ? styles.playerOneToken : (initialState.p2Spaces[3][2] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[3][2]}</Text></View>  
            <View id='row4-col4' style={initialState.spaceColors[3][3] ? (initialState.p1Spaces[3][3] ? styles.playerOneToken : (initialState.p2Spaces[3][3] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[3][3]}</Text></View>  
            <View id='row4-col5' style={initialState.spaceColors[3][4] ? (initialState.p1Spaces[3][4] ? styles.playerOneToken : (initialState.p2Spaces[3][4] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[3][4]}</Text></View>  
            <View id='row4-col6' style={initialState.spaceColors[3][5] ? (initialState.p1Spaces[3][5] ? styles.playerOneToken : (initialState.p2Spaces[3][5] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[3][5]}</Text></View>  
          </View>
          <View id='row3' style={styles.boardGrid}>
            <View id='row3-col1' style={initialState.spaceColors[2][0] ? (initialState.p1Spaces[2][0] ? styles.playerOneToken : (initialState.p2Spaces[2][0] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[2][0]}</Text></View>  
            <View id='row3-col2' style={initialState.spaceColors[2][1] ? (initialState.p1Spaces[2][1] ? styles.playerOneToken : (initialState.p2Spaces[2][1] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[2][1]}</Text></View>  
            <View id='row3-col3' style={initialState.spaceColors[2][2] ? (initialState.p1Spaces[2][2] ? styles.playerOneToken : (initialState.p2Spaces[2][2] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[2][2]}</Text></View>  
            <View id='row3-col4' style={initialState.spaceColors[2][3] ? (initialState.p1Spaces[2][3] ? styles.playerOneToken : (initialState.p2Spaces[2][3] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[2][3]}</Text></View>  
            <View id='row3-col5' style={initialState.spaceColors[2][4] ? (initialState.p1Spaces[2][4] ? styles.playerOneToken : (initialState.p2Spaces[2][4] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[2][4]}</Text></View>  
            <View id='row3-col6' style={initialState.spaceColors[2][5] ? (initialState.p1Spaces[2][5] ? styles.playerOneToken : (initialState.p2Spaces[2][5] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[2][5]}</Text></View>  
          </View>
          <View id='row2' style={styles.boardGrid}>
            <View id='row2-col1' style={initialState.spaceColors[1][0] ? (initialState.p1Spaces[1][0] ? styles.playerOneToken : (initialState.p2Spaces[1][0] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[1][0]}</Text></View>  
            <View id='row2-col2' style={initialState.spaceColors[1][1] ? (initialState.p1Spaces[1][1] ? styles.playerOneToken : (initialState.p2Spaces[1][1] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[1][1]}</Text></View>  
            <View id='row2-col3' style={initialState.spaceColors[1][2] ? (initialState.p1Spaces[1][2] ? styles.playerOneToken : (initialState.p2Spaces[1][2] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[1][2]}</Text></View>  
            <View id='row2-col4' style={initialState.spaceColors[1][3] ? (initialState.p1Spaces[1][3] ? styles.playerOneToken : (initialState.p2Spaces[1][3] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[1][3]}</Text></View>  
            <View id='row2-col5' style={initialState.spaceColors[1][4] ? (initialState.p1Spaces[1][4] ? styles.playerOneToken : (initialState.p2Spaces[1][4] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[1][4]}</Text></View>  
            <View id='row2-col6' style={initialState.spaceColors[1][5] ? (initialState.p1Spaces[1][5] ? styles.playerOneToken : (initialState.p2Spaces[1][5] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[1][5]}</Text></View>  
          </View>
          <View id='row1' style={styles.boardGrid}>
            <View id='row1-col1' style={initialState.spaceColors[0][0] ? (initialState.p1Spaces[0][0] ? styles.playerOneToken : (initialState.p2Spaces[0][0] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[0][0]}</Text></View>  
            <View id='row1-col2' style={initialState.spaceColors[0][1] ? (initialState.p1Spaces[0][1] ? styles.playerOneToken : (initialState.p2Spaces[0][1] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[0][1]}</Text></View>  
            <View id='row1-col3' style={initialState.spaceColors[0][2] ? (initialState.p1Spaces[0][2] ? styles.playerOneToken : (initialState.p2Spaces[0][2] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[0][2]}</Text></View>  
            <View id='row1-col4' style={initialState.spaceColors[0][3] ? (initialState.p1Spaces[0][3] ? styles.playerOneToken : (initialState.p2Spaces[0][3] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[0][3]}</Text></View>   
            <View id='row1-col5' style={initialState.spaceColors[0][4] ? (initialState.p1Spaces[0][4] ? styles.playerOneToken : (initialState.p2Spaces[0][4] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[0][4]}</Text></View>  
            <View id='row1-col6' style={initialState.spaceColors[0][5] ? (initialState.p1Spaces[0][5] ? styles.playerOneToken : (initialState.p2Spaces[0][5] ? styles.playerTwoToken : styles.filledSpace)) : styles.emptySpace}><Text>{initialState.board[0][5]}</Text></View>  
          </View> 
        <View style={styles.boardGrid}
        ><Text>{//initialState.simpleboard
        }</Text></View>           
      </View>      
      <Pressable style={styles.resetButton} 
              onPress={() => 
                initialState.resetGame() &
                navigation.push('Game')
                //navigation.popToTop()
              }><Text style={{color: '#fff',fontWeight: 'bold'}}>Reset Game</Text>
      </Pressable>
    </SafeAreaView>
  );
};

var userSampleData = [
  [{userId: 'abc123def'},
  {userName: 'Sam Red'},
  {userLoginEmail: 'sample@gmail.com'},
  {userLoginPassword: 'sample123'},
  {userTotalGameWins: 4}],
  [{userId: 'zyx098wvu'},
  {userName: 'Sally Blue'},
  {userLoginEmail: 'test@gmail.com'},
  {userLoginPassword: 'test098'},
  {userTotalGameWins: 2}]
]

var currentUserData = {
  userId: '9f84gp94h',
  userName: 'Chrystal',
  userLoginEmail: 'chrystal@test.com',
  userLoginPassword: 'abc123',
  userTotalGameWins: 9
}

function getAllUserData() {
  return userSampleData;
}
function getUserDataByID(theUserId) {
  var theUserData = [];
  console.log(userSampleData);
  return theUserData;
}

function userCreateNewAccount(newUserName, newUserEmail, newUserPassword){
  var newAccount = [
    {userId: ''},
    {userName: ''},
    {userLoginEmail: ''},
    {userLoginPassword: ''},
    {userTotalGameWins: 0}
  ]
  let arrayLength = userSampleData.length;
  //TODO: check for existing user(s)
  if(userSampleData.userLoginEmail == ''){
      newAccount.userId = 'uID1' ; //TODO: randomly generate without duplicating
      newAccount.userName = newUserName;
      newAccount.userLoginEmail = newUserEmail;
      newAccount.userLoginPassword = newUserPassword;
      newAccount.userTotalGameWins = 0;

      userSampleData.push(newAccount);
      if (arrayLength > userSampleData.length){
        console.log('New Account Created');
      } else {
        console.log('Account creation failed')
      }
    }
  return;
}

var initialState = {
  currentPlayer: '1',
  gameWon: false,
  validMoves: [{0: true, 1: true, 2: true, 3: true, 4: true, 5: true}], //col open status.
  displayMessage: 'Player 1, Pick a Column',
  board: [
    {0:'0',1:'0',2:'0',3:'0',4:'0',5:'0',}, //row1 - bottom
    {0:'0',1:'0',2:'0',3:'0',4:'0',5:'0',},
    {0:'0',1:'0',2:'0',3:'0',4:'0',5:'0',},
    {0:'0',1:'0',2:'0',3:'0',4:'0',5:'0',},
    {0:'0',1:'0',2:'0',3:'0',4:'0',5:'0',},
    {0:'0',1:'0',2:'0',3:'0',4:'0',5:'0',}, //row6 - top
  ], //6*6 = {rows{cols}} call as [row][col]
  spaceColors: [ // unelegant, but functional.
    {0:false,1:false,2:false,3:false,4:false,5:false,}, //row1 - bottom
    {0:false,1:false,2:false,3:false,4:false,5:false,},
    {0:false,1:false,2:false,3:false,4:false,5:false,},
    {0:false,1:false,2:false,3:false,4:false,5:false,},
    {0:false,1:false,2:false,3:false,4:false,5:false,},
    {0:false,1:false,2:false,3:false,4:false,5:false,}, //row6 - top
  ], //6*6 = {rows{cols}} call as [row][col]
  p1Spaces: [ // unelegant, but functional.
    {0:false,1:false,2:false,3:false,4:false,5:false,}, //row1 - bottom
    {0:false,1:false,2:false,3:false,4:false,5:false,},
    {0:false,1:false,2:false,3:false,4:false,5:false,},
    {0:false,1:false,2:false,3:false,4:false,5:false,},
    {0:false,1:false,2:false,3:false,4:false,5:false,},
    {0:false,1:false,2:false,3:false,4:false,5:false,}, //row6 - top
  ], //6*6 = {rows{cols}} call as [row][col]
  p2Spaces: [ // unelegant, but functional.
    {0:false,1:false,2:false,3:false,4:false,5:false,}, //row1 - bottom
    {0:false,1:false,2:false,3:false,4:false,5:false,},
    {0:false,1:false,2:false,3:false,4:false,5:false,},
    {0:false,1:false,2:false,3:false,4:false,5:false,},
    {0:false,1:false,2:false,3:false,4:false,5:false,},
    {0:false,1:false,2:false,3:false,4:false,5:false,}, //row6 - top
  ], //6*6 = {rows{cols}} call as [row][col]
  //can use this to show board, but not user friendly
  simpleboard: '|000000|\n|000000|\n|000000|\n|000000|\n|000000|\n|000000|',
  tokenCoordinate: [], //{0:row,1:col}
  spaceIsFilled: false,
  spaceP1Color: false,
  spaceP2Color: false,
  turnTrack: function () { //alternates current player.
    if (this.currentPlayer == '1') {
      this.currentPlayer = '2';
    } else if (this.currentPlayer == '2') {
      this.currentPlayer = '1';
    } else {
      alert('next player unknown')
    }
    return this.currentPlayer;
  },
  updateMessage: function () { //turn track display message.
    if (this.currentPlayer == '1') {
      this.displayMessage = 'Player 1, Pick a Column'
    } else if (this.currentPlayer == '2') {
      this.displayMessage = 'Player 2, Pick a Column'
    } else {
      alert('message unknown')
    }
    return this.displayMessage;
  },
  checkSpace: function (column) { //checks col for open space & returns row#.
    //let activeplayer = this.currentPlayer
    //alert(this.board[0][column-1]);
    var openRow;
    if (this.board[0][column-1] == '0') {
      //row1[column] = activeplayer
      openRow = 1
    } else if (this.board[1][column-1] == '0') {
      //row2[column] = activeplayer
      openRow = 2
    } else if (this.board[2][column-1] == '0') {
      //row3[column] = activeplayer
      openRow = 3
    } else if (this.board[3][column-1] == '0') {
      //row4[column] = activeplayer
      openRow = 4
    } else if (this.board[4][column-1] == '0') {
      //row5[column] = activeplayer
      openRow = 5
    } else if (this.board[5][column-1] == '0') {
      //row6[column] = activeplayer
      openRow = 6
    } else {
      //alert('Space not available')
    }
    //alert('Open Space [col' + column + ', row' + openRow +']');
    return openRow;
  },
  checkWin: function () { //checks for any of the win types.
    var winResult = false;
    this.simpleboard = 
    '|' + initialState.board[5][0] + initialState.board[5][1] + initialState.board[5][2] + initialState.board[5][3] + initialState.board[5][4] + initialState.board[5][5] + '|\n' +
    '|' + initialState.board[4][0] + initialState.board[4][1] + initialState.board[4][2] + initialState.board[4][3] + initialState.board[4][4] + initialState.board[4][5] + '|\n' +
    '|' + initialState.board[3][0] + initialState.board[3][1] + initialState.board[3][2] + initialState.board[3][3] + initialState.board[3][4] + initialState.board[3][5] + '|\n' +
    '|' + initialState.board[2][0] + initialState.board[2][1] + initialState.board[2][2] + initialState.board[2][3] + initialState.board[2][4] + initialState.board[2][5] + '|\n' +
    '|' + initialState.board[1][0] + initialState.board[1][1] + initialState.board[1][2] + initialState.board[1][3] + initialState.board[1][4] + initialState.board[1][5] + '|\n' +
    '|' + initialState.board[0][0] + initialState.board[0][1] + initialState.board[0][2] + initialState.board[0][3] + initialState.board[0][4] + initialState.board[0][5] + '|' ;
    //alert(this.simpleboard);
    if(this.checkVertical() || this.checkHorizontal() || this.checkDiagonal()){
      winResult = true;
    }
    return winResult;
  },
  checkVertical: function () { //checks for vertical win.
    var vColResult = false;
    let recentToken = this.tokenCoordinate; //{row,col}
    let p = this.currentPlayer;
    let b = this.board;
    let r = recentToken[0]-1;
    let c = recentToken[1]-1;
    if (r > 2){
      //-3space
      if (p == b[r-1][c] && p == b[r-2][c] && p == b[r-3][c]){
        vColResult = true;
        initialState.displayMessage = 'Player '+p+' won with vertical match!';
      }
    }
    return vColResult;
  },
  checkHorizontal: function() { //checks for horizontal win.
    var hRowResult = false;
    let recentToken = this.tokenCoordinate; //{row,col}
    let p = this.currentPlayer;
    let b = this.board;
    let r = recentToken[0]-1;
    let c = recentToken[1]-1;   
    //alert(b[r][c]+' col '+(c+1));
      //space+3
      if (p == b[r][c+1] && p == b[r][c+2] && p == b[r][c+3]) {
        hRowResult = true;
        //alert(c+'space+3');
      //-1space+2  
      } else if (p == b[r][c-1] && p == b[r][c+1] && p == b[r][c+2]) {
        hRowResult = true;
        //alert(c+'-1&space+2');
      //-2space+1  
      } else if (p == b[r][c-2] && p == b[r][c-1] && p == b[r][c+1]) {  
        hRowResult = true;
        //alert(c+'-2&space+1');
      //-3space
      } else if (p == b[r][c-1] && p == b[r][c-2] && p == b[r][c-3]) {
        hRowResult = true;
        //alert(c+'-3space');
      } 
    if(hRowResult){
      initialState.displayMessage = 'Player '+p+' won with horizontal match!';
      //alert(initialState.displayMessage);
    }
    return hRowResult;
  },
  checkDiagonal: function () { //checks for diagonal win.
    var dResult = false;
    let recentToken = this.tokenCoordinate; //{row,col}
    let p = this.currentPlayer;
    let b = this.board;
    let r = recentToken[0]-1;
    let c = recentToken[1]-1;
    if (r < 3 && c < 3) { //0-2 aka 1-3
      //alert('r < 3 && c < 3');
      if (p == b[r+1][c+1] && p == b[r+2][c+2] && p == b[r+3][c+3]) { 
        dResult = true; //forward slash
      }
    }
    if (r > 0 && r < 4 && c > 0 && c < 4) { //1-3 aka 2-4
      //alert('r > 0 && r < 4 && c > 0 && c < 4');
      if (p == b[r-1][c-1] && p == b[r+1][c+1] && p == b[r+2][c+2]) {
        dResult = true; //forward slash
      } 
    } 
    if (r > 1 && r < 5 && c > 1 && c < 5) { //2-4 aka 3-5
      //alert('r > 1 && r < 5 && c > 1 && c < 5');
      if (p == b[r-2][c-2] && p == b[r-1][c-1] && p == b[r+1][c+1]) {  
        dResult = true; //forward slash
      }
    }  
    if (r > 2 && c > 2) { //3-5 aka 4-6
      //alert('r > 2 && c > 2');
      if (p == b[r-1][c-1] && p == b[r-2][c-2] && p == b[r-3][c-3]) {
        dResult = true; //forward slash
      }
    } 
    if (r < 3 && c > 2) { //0-2 aka 1-3 && 3-5 aka 4-6
      //alert('r < 3 && c > 2');
      if (p == b[r+1][c-1] && p == b[r+2][c-2] && p == b[r+3][c-3]) {
        dResult = true; //back slash
      }
    } 
    if (r > 0 && r < 4 && c > 1 && c < 5) { //1-3 aka 2-4 && 2-4 aka 3-6
      //alert('r > 0 && r < 4 && c > 1 && c < 5');
      if (p == b[r-1][c+1] && p == b[r+1][c-1] && p == b[r+2][c-2]) {
        dResult = true; //back slash 
      }
    } 
    if (r > 1 && r < 5 && c > 0 && c < 4) { //2-4 aka 3-5 && 1-3 aka 2-4
      //alert('r > 1 && r < 5 && c > 0 && c < 4');
      if (p == b[r-2][c+2] && p == b[r-1][c+1] && p == b[r+1][c-1]) {  
        dResult = true; //back slash
      }
    } 
    if (r > 2 && c < 3) { //3-5 aka 4-6 && 0-2 aka 1-3 
      //alert('r > 2 && c < 3');
      if (p == b[r-1][c+1] && p == b[r-2][c+2] && p == b[r-3][c+3]) {
        dResult = true; //back slash
      }
    }
    if(dResult){
      initialState.displayMessage = 'Player '+p+' won with diagonal match!';
      //alert(initialState.displayMessage);
    }
    return dResult;
  },
  checkStalemate: function() { //basic check for valid moves left.
    var stalemate = false;
    if (this.gameWon == false) {
      if (this.board[5][0] == '0' 
        || this.board[5][1] == '0' 
        || this.board[5][2] == '0' 
        || this.board[5][3] == '0'
        || this.board[5][4] == '0'
        || this.board[5][5] == '0') {
        //alert("valid move exists");
      } else {
        //alert("no moves left");
        stalemate = true;
        this.displayMessage = "Stalemate, start a new game.";
      }
    }
    return stalemate;
  },
  resetGame: function (){ //reset current game to initial settings.
    this.currentPlayer = '1';
    this.gameWon = false;
    this.displayMessage = 'Player 1, Pick a Column';
    this.board = [
      {0:'0',1:'0',2:'0',3:'0',4:'0',5:'0',}, //row1 - bottom
      {0:'0',1:'0',2:'0',3:'0',4:'0',5:'0',},
      {0:'0',1:'0',2:'0',3:'0',4:'0',5:'0',},
      {0:'0',1:'0',2:'0',3:'0',4:'0',5:'0',},
      {0:'0',1:'0',2:'0',3:'0',4:'0',5:'0',},
      {0:'0',1:'0',2:'0',3:'0',4:'0',5:'0',}, //row6 - top
    ]; //6*6 = {rows{cols}} call as [row][col]
    this.spaceColors = [ // unelegant, but functional.
      {0:false,1:false,2:false,3:false,4:false,5:false,}, //row1 - bottom
      {0:false,1:false,2:false,3:false,4:false,5:false,},
      {0:false,1:false,2:false,3:false,4:false,5:false,},
      {0:false,1:false,2:false,3:false,4:false,5:false,},
      {0:false,1:false,2:false,3:false,4:false,5:false,},
      {0:false,1:false,2:false,3:false,4:false,5:false,}, //row6 - top
    ]; //6*6 = {rows{cols}} call as [row][col]
    this.p1Spaces = [ // unelegant, but functional.
      {0:false,1:false,2:false,3:false,4:false,5:false,}, //row1 - bottom
      {0:false,1:false,2:false,3:false,4:false,5:false,},
      {0:false,1:false,2:false,3:false,4:false,5:false,},
      {0:false,1:false,2:false,3:false,4:false,5:false,},
      {0:false,1:false,2:false,3:false,4:false,5:false,},
      {0:false,1:false,2:false,3:false,4:false,5:false,}, //row6 - top
    ]; //6*6 = {rows{cols}} call as [row][col]
    this.p2Spaces = [ // unelegant, but functional.
      {0:false,1:false,2:false,3:false,4:false,5:false,}, //row1 - bottom
      {0:false,1:false,2:false,3:false,4:false,5:false,},
      {0:false,1:false,2:false,3:false,4:false,5:false,},
      {0:false,1:false,2:false,3:false,4:false,5:false,},
      {0:false,1:false,2:false,3:false,4:false,5:false,},
      {0:false,1:false,2:false,3:false,4:false,5:false,}, //row6 - top
    ]; //6*6 = {rows{cols}} call as [row][col]
    //can use this to show board, but not user friendly
    this.simpleboard = '|000000|\n|000000|\n|000000|\n|000000|\n|000000|\n|000000|';
    this.tokenCoordinate = []; //{0:row,1:col}
    this.spaceIsFilled = false;
    this.spaceP1Color = false;
    this.spaceP2Color = false;
    return;
  },
}


function placeToken(column){ //primary play action.
  if (column < 7 && column > -1){
    var row = initialState.checkSpace(column);
    if (row < 7 && row > -1){
      initialState.tokenCoordinate = {0:row,1:column};
      //alert(initialState.tokenCoordinate[0]+','+initialState.tokenCoordinate[1]);
      initialState.board[row-1][column-1] = initialState.currentPlayer; 
      //alert(initialState.currentPlayer + ' placed a token in column ' + column + ' row ' + row);
      // unelegant method to set style color, but functional.
      initialState.spaceIsFilled = true;
      initialState.spaceColors[row-1][column-1] = initialState.currentPlayer;
      if (initialState.currentPlayer == '1'){
        initialState.p1Spaces[row-1][column-1] = true;
      } else if (initialState.currentPlayer == '2'){
        initialState.p2Spaces[row-1][column-1] = true;
      }
      if (initialState.checkWin()){
        currentUserData.userTotalGameWins++,
        Alert.alert(
          'Winner!',
          initialState.displayMessage,
          [ //this still needs to include refresh/reload the page as new still.
            {text: 'Pick a Column to Start New Game', onPress: () => initialState.resetGame()},
          ],
        );
      } else if (initialState.checkStalemate()){
        Alert.alert(
          'Stalemate!',
          initialState.displayMessage,
          [ //this still needs to include refresh/reload the page as new still.
            {text: 'Pick a Column to Start New Game', onPress: () => initialState.resetGame()},
          ],
        );
      } else{
        initialState.turnTrack();
        initialState.updateMessage();
      }
    } else{
      alert('Try another column.');
    }
  } else {
    alert('Column '+ column +' is not a valid option');
  }
  return initialState.tokenCoordinate; //{row,col}
}

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen 
            name='Home'
            component={HomeScreen}
            options={{title: 'Welcome'}}
          ></Stack.Screen>
          <Stack.Screen 
            name='Profile'
            component={ProfileScreen}
            options={{title: 'My Profile'}}
          ></Stack.Screen>
          <Stack.Screen 
            name='Game'
            component={GameScreen}
            //options={{title: 'Play Game'}}
            options={({ navigation, route }) => ({
              headerTitle: " Play a Game",
              headerRight: () => (
                <Pressable title="Profile"></Pressable>
                //<Pressable title="Reset Game"></Pressable>
              ),
              headerLeft: () => (
                <Pressable title="Back"></Pressable>
              )
            })}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  headerBackContainer: {
    marginRight: 15,
  },
  headerBackText: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    height: 'auto',
  },
  logoContainer: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
    margin: 50,
  },
  playButton: {
    borderRadius: 25, 
    height: 75,
    width: 200,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButtonLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },
  profileButton: {
    borderRadius: 15,
    height: 40,
    width: 'auto',
    padding: 5,
    marginRight: 5,
    backgroundColor: '#ab7bb8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetButton: {
    borderRadius: 5, //on game board: normally 25 for rounding
    height: 40, //normally 50
    width: 100,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameContainer: {
    //marginTop: 50,
    //marginBottom: 25,
    padding: 25,
    height: 'auto', //normally 550
    width: 400,
    backgroundColor: '#fff',
    fontWeight: 'bold',
    //color: '#fff', 
  },
  gameMessageContainer: {
    alignItems: 'center',
    color: '#25292e',
  },
  gameMessageText: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 15,
  },
  colselections: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  spaceSeletion: {
    margin: 5,
    height: 50,
    width: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#77DD77',
    //backgroundColor: '#77DD77',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullSpaceSelection: {
    margin: 5,
    height: 50,
    width: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#25292e',
    backgroundColor: '#BFBFBF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boardGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerOneToken: {
    margin: 5,
    height: 50,
    width: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#25292e',
    backgroundColor: '#1b3fff',
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerTwoToken: {
    margin: 5,
    height: 50,
    width: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#25292e',
    backgroundColor: '#ff0000',    
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filledSpace: {
    margin: 5,
    height: 50,
    width: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#25292e',
    backgroundColor: '#CDB0EE',    
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptySpace: {
    margin: 5,
    height: 50,
    width: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#25292e',
    //backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
