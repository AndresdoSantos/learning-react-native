import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function SkillCard({ title }) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
