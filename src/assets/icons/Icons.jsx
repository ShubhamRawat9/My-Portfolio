import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Icons() {
  return (
    <div className="flex gap-5 text-2xl">
      <a href="https://github.com/ShubhamRawat9">
        <FaGithub />
      </a>

      <a href="www.linkedin.com/in/shubham-rawat-76a492281">
        <FaLinkedin />
      </a>

      <a href="https://leetcode.com/u/rawatshubham6565/">
        <FaLeetcode />
      </a>
    </div>
  );
}