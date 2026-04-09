import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const COLORS = ['#E6F1FB', '#EAF3DE', '#FAEEDA', '#FBEAF0', '#E1F5EE', '#EEEDFE'];

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [colorIndex, setColorIndex] = useState(0);

  const handleIncrement = () => setCount(prev => prev + 1);

  const handleDecrement = () => {
    if (count > 0) setCount(prev => prev - 1);
  };

  const handleColorToggle = () => {
    setColorIndex(prev => (prev + 1) % COLORS.length);
  };

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: COLORS[colorIndex] }]}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>Magic Dashboard ⚡</Text>
        <Text style={styles.appSubtitle}>Misi 4 — State & Props</Text>
      </View>

      {/* Counter System */}
      <View style={styles.card}>
        <Text style={styles.sectionLabel}>COUNTER SYSTEM</Text>
        <Text style={styles.countDisplay}>{count}</Text>
        <View style={styles.btnRow}>
          <TouchableOpacity
            style={[styles.btn, count === 0 && styles.btnDisabled]}
            onPress={handleDecrement}
            activeOpacity={0.7}
          >
            <Text style={[styles.btnText, count === 0 && styles.btnTextDisabled]}>−</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.btnPrimary]}
            onPress={handleIncrement}
            activeOpacity={0.7}
          >
            <Text style={[styles.btnText, styles.btnTextPrimary]}>+</Text>
          </TouchableOpacity>
        </View>
        {count === 0 && (
          <Text style={styles.validationMsg}>Angka tidak boleh kurang dari 0</Text>
        )}
      </View>

      {/* Greeting Form */}
      <View style={styles.card}>
        <Text style={styles.sectionLabel}>GREETING FORM</Text>
        <View style={styles.greetingBox}>
          <Text style={styles.greetingText}>
            {name.trim() ? (
              <>
                {'Halo, '}
                <Text style={styles.greetingName}>{name}</Text>
                {'!'}
              </>
            ) : (
              <Text style={styles.greetingPlaceholder}>Ketik namamu di bawah...</Text>
            )}
          </Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Nama kamu..."
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
          maxLength={30}
        />
      </View>

      {/* Toggle Color */}
      <View style={styles.card}>
        <Text style={styles.sectionLabel}>TOGGLE COLOR</Text>
        <TouchableOpacity style={styles.colorBtn} onPress={handleColorToggle} activeOpacity={0.8}>
          <View style={[styles.colorDot, { backgroundColor: COLORS[(colorIndex + 1) % COLORS.length] }]} />
          <Text style={styles.colorBtnText}>Ganti Warna Background</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    paddingVertical: 16,
    marginBottom: 8,
  },
  appTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  appSubtitle: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#aaa',
    letterSpacing: 1,
    marginBottom: 14,
  },
  countDisplay: {
    fontSize: 72,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1a1a1a',
    lineHeight: 80,
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginTop: 16,
  },
  btn: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnDisabled: {
    borderColor: '#eee',
    backgroundColor: '#f5f5f5',
  },
  btnPrimary: {
    backgroundColor: '#378ADD',
    borderColor: '#378ADD',
  },
  btnText: {
    fontSize: 28,
    fontWeight: '400',
    color: '#333',
    lineHeight: 32,
  },
  btnTextDisabled: {
    color: '#ccc',
  },
  btnTextPrimary: {
    color: '#fff',
  },
  validationMsg: {
    textAlign: 'center',
    fontSize: 12,
    color: '#E24B4A',
    marginTop: 10,
  },
  greetingBox: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 14,
    minHeight: 52,
    justifyContent: 'center',
    marginBottom: 12,
  },
  greetingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  greetingName: {
    color: '#378ADD',
  },
  greetingPlaceholder: {
    color: '#aaa',
    fontWeight: '400',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
    color: '#1a1a1a',
    backgroundColor: '#fafafa',
  },
  colorBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    gap: 10,
  },
  colorDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  colorBtnText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
});