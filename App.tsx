/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  FlatList,
  useColorScheme,
  Dimensions,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const {width} = Dimensions.get('window');

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentSection, setCurrentSection] = useState('home'); // 'home', 'shop', 'profile'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleSignIn = () => {
    // Here you would typically validate credentials
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setEmail('');
    setPassword('');
  };

  const renderSignInSection = () => (
    <View style={styles.section}>
      <View style={styles.authContainer}>
        <Text style={styles.sectionTitle}>Welcome Back</Text>
        <Text style={styles.authSubtitle}>Sign in to access your account</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderProfileSection = () => (
    <View style={styles.section}>
      <View style={styles.profileHeader}>
        <Image
          source={{uri: 'https://via.placeholder.com/100'}}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>john.doe@example.com</Text>
      </View>

      <View style={styles.profileStats}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Classes</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Achievements</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Friends</Text>
        </View>
      </View>

      <View style={styles.profileActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.signOutButton]} onPress={handleSignOut}>
          <Text style={[styles.actionButtonText, styles.signOutText]}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderShopSection = () => (
    <View style={styles.section}>
      <View style={styles.shopHeader}>
        <Text style={styles.sectionTitle}>Shop</Text>
        <Text style={styles.shopSubtitle}>Premium MMA Gear</Text>
      </View>

      <View style={styles.shopCategories}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Clothing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Equipment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Accessories</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <FlatList
        data={[
          {id: '1', name: 'Fight Shorts', price: '$49.99', image: 'https://via.placeholder.com/150'},
          {id: '2', name: 'Training Gloves', price: '$79.99', image: 'https://via.placeholder.com/150'},
          {id: '3', name: 'Mouth Guard', price: '$29.99', image: 'https://via.placeholder.com/150'},
          {id: '4', name: 'Hand Wraps', price: '$19.99', image: 'https://via.placeholder.com/150'},
        ]}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.shopItem}>
            <Image source={{uri: item.image}} style={styles.shopImage} />
            <View style={styles.shopItemInfo}>
              <Text style={styles.shopItemName}>{item.name}</Text>
              <Text style={styles.shopItemPrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.shopGrid}
      />
    </View>
  );

  const renderHomeSection = () => (
    <View style={styles.section}>
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Welcome to Top Level MMA</Text>
        <Text style={styles.heroSubtitle}>Your Ultimate Fighting Destination</Text>
      </View>

      <View style={styles.featuredClasses}>
        <Text style={styles.sectionTitle}>Featured Classes</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.featuredClassCard}>
            <Image source={{uri: 'https://via.placeholder.com/200'}} style={styles.featuredClassImage} />
            <View style={styles.featuredClassInfo}>
              <Text style={styles.featuredClassTitle}>Boxing Fundamentals</Text>
              <Text style={styles.featuredClassTime}>Mon/Wed/Fri 9:00 AM</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featuredClassCard}>
            <Image source={{uri: 'https://via.placeholder.com/200'}} style={styles.featuredClassImage} />
            <View style={styles.featuredClassInfo}>
              <Text style={styles.featuredClassTitle}>BJJ Basics</Text>
              <Text style={styles.featuredClassTime}>Tue/Thu 6:00 PM</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>Today's Schedule</Text>
        <View style={styles.scheduleItem}>
          <Text style={styles.scheduleTime}>9:00 AM</Text>
          <View style={styles.scheduleDetails}>
            <Text style={styles.scheduleClass}>Boxing</Text>
            <Text style={styles.scheduleInstructor}>with Coach Mike</Text>
          </View>
        </View>
        <View style={styles.scheduleItem}>
          <Text style={styles.scheduleTime}>6:00 PM</Text>
          <View style={styles.scheduleDetails}>
            <Text style={styles.scheduleClass}>BJJ</Text>
            <Text style={styles.scheduleInstructor}>with Professor Smith</Text>
          </View>
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>Gym Information</Text>
        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <Text style={styles.infoIcon}>🕒</Text>
            <Text style={styles.infoText}>Open 7 days</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoIcon}>👥</Text>
            <Text style={styles.infoText}>Pro trainers</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoIcon}>💪</Text>
            <Text style={styles.infoText}>Modern gear</Text>
          </View>
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>Photo Gallery</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={{uri: 'https://via.placeholder.com/200'}}
            style={styles.galleryImage}
          />
          <Image
            source={{uri: 'https://via.placeholder.com/200'}}
            style={styles.galleryImage}
          />
          <Image
            source={{uri: 'https://via.placeholder.com/200'}}
            style={styles.galleryImage}
          />
        </ScrollView>
      </View>
    </View>
  );

  const renderNavigation = () => (
    <View style={styles.navigation}>
      <TouchableOpacity
        style={[styles.navButton, currentSection === 'home' && styles.navButtonActive]}
        onPress={() => setCurrentSection('home')}>
        <Text style={[styles.navButtonText, currentSection === 'home' && styles.navButtonTextActive]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navButton, currentSection === 'shop' && styles.navButtonActive]}
        onPress={() => setCurrentSection('shop')}>
        <Text style={[styles.navButtonText, currentSection === 'shop' && styles.navButtonTextActive]}>
          Shop
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navButton, currentSection === 'profile' && styles.navButtonActive]}
        onPress={() => setCurrentSection('profile')}>
        <Text style={[styles.navButtonText, currentSection === 'profile' && styles.navButtonTextActive]}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? Colors.darker : Colors.lighter}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[styles.scrollView, backgroundStyle]}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Top Level MMA</Text>
        </View>

        {renderNavigation()}

        {currentSection === 'home' && renderHomeSection()}
        {currentSection === 'shop' && renderShopSection()}
        {currentSection === 'profile' && (isSignedIn ? renderProfileSection() : renderSignInSection())}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  navButton: {
    padding: 10,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  navButtonActive: {
    backgroundColor: '#1a1a1a',
  },
  navButtonText: {
    color: '#1a1a1a',
    fontWeight: '600',
    fontSize: 16,
  },
  navButtonTextActive: {
    color: '#ffffff',
  },
  section: {
    padding: 20,
  },
  heroSection: {
    marginBottom: 30,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#666666',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1a1a1a',
  },
  cardText: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 8,
  },
  galleryImage: {
    width: 200,
    height: 200,
    borderRadius: 15,
    marginRight: 15,
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#1a1a1a',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 15,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#1a1a1a',
    fontSize: 14,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 16,
    color: '#666666',
  },
  profileStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#666666',
  },
  profileActions: {
    gap: 10,
  },
  actionButton: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#1a1a1a',
    fontSize: 16,
    fontWeight: '600',
  },
  signOutButton: {
    backgroundColor: '#ff4444',
    marginTop: 10,
  },
  signOutText: {
    color: '#ffffff',
  },
  shopHeader: {
    marginBottom: 20,
  },
  shopSubtitle: {
    fontSize: 16,
    color: '#666666',
  },
  shopCategories: {
    marginBottom: 20,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    color: '#1a1a1a',
    fontSize: 14,
    fontWeight: '600',
  },
  shopGrid: {
    padding: 10,
  },
  shopItem: {
    flex: 1,
    margin: 5,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  shopImage: {
    width: '100%',
    height: 150,
  },
  shopItemInfo: {
    padding: 15,
  },
  shopItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 5,
  },
  shopItemPrice: {
    fontSize: 14,
    color: '#666666',
  },
  featuredClasses: {
    marginBottom: 30,
  },
  featuredClassCard: {
    width: width * 0.7,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginRight: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featuredClassImage: {
    width: '100%',
    height: 150,
  },
  featuredClassInfo: {
    padding: 15,
  },
  featuredClassTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 5,
  },
  featuredClassTime: {
    fontSize: 14,
    color: '#666666',
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  scheduleTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
    width: 80,
  },
  scheduleDetails: {
    flex: 1,
  },
  scheduleClass: {
    fontSize: 16,
    color: '#1a1a1a',
    marginBottom: 2,
  },
  scheduleInstructor: {
    fontSize: 14,
    color: '#666666',
  },
  infoGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  infoItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
  authContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  authSubtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 30,
  },
});

export default App;
