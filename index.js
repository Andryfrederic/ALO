/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Apps from './components/Login';
import Demarrage from './components/Demarrage';

AppRegistry.registerComponent(appName, () => Demarrage);
